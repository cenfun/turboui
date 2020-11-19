<template>
    <div v-if="show" :class="classList" :style="styleList">
        <transition appear mode="out-in" name="lui-fade">
            <div class="lui-tooltip-text">
                <template v-if="text">
                    {{ text }}
                </template>
                <template v-else>
                    <slot />
                </template>
            </div>
        </transition>
    </div>
</template>

<script>
import Popup from "../popup/popup.vue";
import { token } from "../../helper/util.js";
import createElement from "../../helper/create-element.js";

const Tooltip = {
    extends: Popup,
    props: {

        text: {
            type: String,
            default: ""
        },

        maxWidth: {
            type: Number,
            default: 320
        },

        styling: {
            type: String,
            default: "default",
            validator(value) {
                return ["default", "prompt", "warn", "error"].indexOf(value) > -1;
            }
        }

    },

    data() {
        return {
            show: true,
            disabled: false,
            classId: "",
            //calculation info
            position: "top",
            align: "center",
            top: 0,
            left: 0
        };
    },

    computed: {
        classList() {
            return [
                "lui",
                "lui-popup",
                `lui-popup-${this.position}-${this.align}`,
                "lui-tooltip",
                `lui-tooltip-${this.size}`,
                `lui-tooltip-${this.styling}`,
                this.classId
            ];
        },

        styleList() {
            return {
                top: `${this.top}px`,
                left: `${this.left}px`,
                "max-width": `${this.maxWidth}px`
            };
        }

    },

    created() {
        this.classId = token(8, "lui-tooltip-");
        if (this.bindTarget) {
            this.show = false;
        }
    },

    mounted() {
        if (this.attachToBody || !this.$el.parentNode) {
            document.body.appendChild(this.$el);
        }
        this.bindEvents();
        this.update();
    },

    beforeDestroy() {
        this.unbindEvents();
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$emit("close");
    },

    methods: {
        bindEvents() {
            this.bindTargetEvent();
            //after mounted
            this.$watch("show", this.showHandler);
        },

        unbindEvents() {
            this.unbindTargetEvent();
        },

        showHandler() {
            if (this.show) {
                this.$nextTick(() => {
                    this.update();
                });
            } else {
                this.$emit("close");
            }
        },

        //=============================================================================

        bindTargetEvent() {
            if (!this.bindTarget) {
                return;
            }
            const $target = this.getElement(this.target);
            if ($target) {
                this.$target = $target;
                this.$target.addEventListener("mouseenter", this.openHandler);
                this.$target.addEventListener("focus", this.openHandler);
                this.$target.addEventListener("mouseleave", this.closeHandler);
                this.$target.addEventListener("blur", this.closeHandler);
            }
        },

        unbindTargetEvent() {
            if (this.$target) {
                this.$target.removeEventListener("mouseenter", this.openHandler);
                this.$target.removeEventListener("focus", this.openHandler);
                this.$target.removeEventListener("mouseleave", this.closeHandler);
                this.$target.removeEventListener("blur", this.closeHandler);
                this.$target = null;
            }
        },

        openHandler() {
            if (this.show) {
                return;
            }
            if (this.disabled) {
                return;
            }
            this.show = true;
        },

        closeHandler() {
            if (!this.show) {
                return;
            }
            if (this.disabled) {
                return;
            }
            if (this.$target) {
                this.show = false;
            } else {
                this.$destroy();
            }
        },

        //=============================================================================

        update() {
            this.$nextTick(() => {
                this.updateSync();
            });
            return this;
        },

        updateSync() {
            if (!this.show) {
                return this;
            }
            const containerRect = this.getRect(this.container || window);
            const targetRect = this.getRect(this.target);

            //fix for arrow size
            const arrowSize = 10;
            targetRect.left -= arrowSize;
            targetRect.top -= arrowSize;
            targetRect.width += arrowSize * 2;
            targetRect.height += arrowSize * 2;

            const rect = this.getRect(`.${this.classId}`);

            //console.log(containerRect, targetRect, rect);
            
            this.positionInfo = this.getBestPosition(
                containerRect,
                targetRect,
                rect,
                this.positions
            );

            //no change
            if (this.position === this.positionInfo.position
            && this.align === this.positionInfo.align
            && this.top === this.positionInfo.top
            && this.left === this.positionInfo.left) {
                return this;
            }

            //console.log(this.positionInfo);

            this.position = this.positionInfo.position;
            this.align = this.positionInfo.align;
            this.top = this.positionInfo.top;
            this.left = this.positionInfo.left;

            this.$emit("update");
            return this;
        }
    }
};

Tooltip.create = (option, container) => {
    return createElement(Tooltip, option, container);
};

export default Tooltip;
</script>

<style lang="scss">
.lui-tooltip {
    //pointer-events: none;
    position: absolute;
    visibility: visible;
    z-index: 1000;
    opacity: 1;
    margin: 0;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    transition: opacity 0.2s linear, visibility 0.2s linear;

    .lui-tooltip-text {
        padding: 10px 10px;
        display: inline-block;
        font-size: 14px;
        //https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break
        word-break: break-word;
        overflow-wrap: break-word;
        //IE https://caniuse.com/#feat=wordwrap
        word-wrap: break-word;
    }

    .lui-fade-enter-active,
    .lui-fade-leave-active {
        transition: opacity 0.3s;
    }

    .lui-fade-enter,
    .lui-fade-leave-to {
        opacity: 0;
    }
}
</style>
