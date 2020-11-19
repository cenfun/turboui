<template>
    <div v-if="show" :class="classList" :style="styleList">
        <transition appear mode="out-in" name="lui-fade">
            <div :class="classBody">
                <div class="lui-tooltip-text">
                    <template v-if="text">
                        {{ text }}
                    </template>
                    <template v-else>
                        <slot />
                    </template>
                </div>
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

        size: {
            type: String,
            default: "medium",
            validator(value) {
                return ["small", "medium", "large"].indexOf(value) > -1;
            }
        },

        width: {
            type: String,
            default: "m",
            validator(value) {
                return ["s", "m", "l", "xl"].indexOf(value) > -1;
            }
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
                "lui-tooltip",
                "lui-tooltip-wrapper"
            ];
        },

        styleList() {
            return {
                top: `${this.top}px`,
                left: `${this.left}px`
            };
        },

        classBody() {
            const list = [
                "lui",
                "lui-popup",
                `lui-popup-${this.position}-${this.align}`,
                "lui-tooltip-body",
                "lui-tooltip",
                `lui-tooltip-${this.styling}`,
                `lui-tooltip-${this.size}`,
                `lui-tooltip-width-${this.width}`,
                this.classId
            ];
            if (this.styling === "warn") {
                list.splice(2, 0, "lui-tooltip-default");
            }
            return list;
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
$warn-color: #f5c400;
$pre: "lui-tooltip-";
$positions: bottom right top left;

.lui-tooltip {
    &.lui-tooltip-wrapper {
        position: absolute;
        display: block;
        pointer-events: none;
        z-index: 2000;

        .lui-tooltip-body {
            visibility: visible;
            opacity: 1;
            margin: 0;
            transform: none;
            right: inherit;
            bottom: inherit;
            font-size: 14px;
            //https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break
            word-break: break-word;
            overflow-wrap: break-word;
            //IE https://caniuse.com/#feat=wordwrap
            word-wrap: break-word;
        }
    }

    .#{$pre}warn {
        background-color: $warn-color;
        border-color: $warn-color;
        color: #1e1e1e;
        font-size: 14px;

        @each $p in $positions {
            @if $p == right or $p == left {
                &.#{$pre}#{$p}-top::after,
                &.#{$pre}#{$p}-center::after,
                &.#{$pre}#{$p}-bottom::after,
                &.#{$pre}#{$p}-top::before,
                &.#{$pre}#{$p}-center::before,
                &.#{$pre}#{$p}-bottom::before {
                    border-#{$p}-color: $warn-color;
                }
            }

            @else {
                &.#{$pre}#{$p}-left::after,
                &.#{$pre}#{$p}-center::after,
                &.#{$pre}#{$p}-right::after,
                &.#{$pre}#{$p}-left::before,
                &.#{$pre}#{$p}-center::before,
                &.#{$pre}#{$p}-right::before {
                    border-#{$p}-color: $warn-color;
                }
            }
        }
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
