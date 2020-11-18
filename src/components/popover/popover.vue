<template>
    <div v-if="show" :class="classList" :style="styleList">
        <transition appear mode="out-in" name="lui-fade">
            <div class="lui-popover-body" :style="styleBody">
                <div v-if="showHeader" class="lui-popover-header lui-popover__header">
                    <slot name="header">
                        <h2 class="lui-popover-title lui-popover__title" v-text="title" />
                    </slot>
                </div>
                <div :class="classContent">
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { token } from "../../helper/util.js";
import createElement from "../../helper/create-element.js";
import {
    getDefaultPositions, getBestPosition, getRect, getElement, toRect
} from "popover-helper";

const Popover = {
    props: {

        target: {
            type: [String, Object],
            default: ""
        },

        bindTarget: {
            type: Boolean,
            default: false
        },

        positions: {
            type: [String, Array],
            default: () => {
                return getDefaultPositions();
            }
        },

        title: {
            type: String,
            default: ""
        },

        autoClose: {
            type: Boolean,
            default: true
        },

        hasHeader: {
            type: Boolean,
            default: true
        },

        bindResize: {
            type: [String, Boolean],
            default: "close"
        },

        bindScroll: {
            type: [String, Boolean],
            default: "close"
        },

        width: {
            type: Number,
            default: 200
        },

        minHeight: {
            type: Number,
            default: 0
        },

        maxHeight: {
            type: Number,
            default: 800
        },

        attachToBody: {
            type: Boolean,
            default: true
        },

        container: {
            type: [String, Object, Document, Window],
            default: ""
        },

        visible: {
            type: [Boolean, String],
            default: ""
        }
    },

    data() {
        return {
            show: true,
            showHeader: true,
            classId: "",
            contentOverflow: false,
            //calculation info
            info: {
                position: "bottom",
                align: "center",
                top: 0,
                left: 0,
                width: "auto",
                height: "auto"
            }
        };
    },

    computed: {
        classList() {
            return [
                "lui-popover",
                this.classId,
                `lui-popover--${this.info.position}-${this.info.align}`
            ];
        },

        styleList() {
            return {
                top: `${this.info.top}px`,
                left: `${this.info.left}px`,
                width: `${this.info.width}px`,
                height: `${this.info.height}px`
            };
        },

        styleBody() {
            return {
                width: `${this.width}px`
            };
        },

        classContent() {
            const list = [
                "lui-popover-content",
                "lui-popover__content"
            ];
            if (this.contentOverflow) {
                list.push("lui-popover-content-overflow");
            }
            return list;
        }

    },

    created() {
        this.classId = token(8, "lui-popover-");
       
        this.showHeader = this.hasHeader;
        if (this.showHeader && !this.title) {
            this.showHeader = false;
        }

        if (typeof this.visible === "boolean") {
            this.show = this.visible;
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
        clearTimeout(this.timeout_close);
        this.updateStop();
        this.unbindEvents();
        this.targetElement = null;
        this.positionInfo = null;
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$emit("close");
    },

    methods: {
        bindEvents() {
            this.bindTargetEvent();
            this.bindResizeEvent();
            this.bindScrollEvent();
            this.bindCloseEvent();
            //after mounted
            this.$watch("show", this.showHandler);
        },

        unbindEvents() {
            this.unbindTargetEvent();
            this.unbindResizeEvent();
            this.unbindScrollEvent();
            this.unbindCloseEvent();
        },

        showHandler() {
            if (this.show) {
                this.bindResizeEvent();
                this.bindScrollEvent();
                this.bindCloseEvent();
                this.update();
            } else {
                this.unbindResizeEvent();
                this.unbindScrollEvent();
                this.unbindCloseEvent();
                this.positionInfo = null;
                this.$emit("close");
            }
        },

        //=============================================================================

        bindTargetEvent() {
            if (!this.bindTarget) {
                return;
            }
            const $target = getElement(this.target);
            if ($target) {
                this.$target = $target;
                this.$target.addEventListener("click", this.openHandler);
            }
        },

        unbindTargetEvent() {
            if (this.$target) {
                this.$target.removeEventListener("click", this.openHandler);
                this.$target = null;
            }
        },

        openHandler() {
            if (this.show) {
                return;
            }
            this.show = true;
        },

        //=============================================================================

        bindResizeEvent() {
            if (!this.bindResize) {
                return;
            }
            this.unbindResizeEvent();
            window.addEventListener("resize", this.resizeHandler);
        },

        unbindResizeEvent() {
            window.removeEventListener("resize", this.resizeHandler);
        },

        resizeHandler() {
            if (this.bindResize === "close") {
                this.close();
                return;
            }
            this.update();
        },

        //=============================================================================

        bindScrollEvent() {
            if (!this.bindScroll) {
                return;
            }
            this.unbindScrollEvent();
            window.addEventListener("scroll", this.scrollHandler, true);
        },

        unbindScrollEvent() {
            window.removeEventListener("scroll", this.scrollHandler, true);
        },

        scrollHandler(e) {
            if (this.isInnerElement(e.target)) {
                return;
            }
            if (!this.isParentElement(e.target)) {
                return;
            }
            if (this.bindScroll === "close") {
                this.close();
                return;
            }
            this.update();
        },
        
        //=============================================================================

        bindCloseEvent() {
            this.unbindCloseEvent();
            if (this.autoClose && this.show) {
                this.timeout_close = setTimeout(() => {
                    window.addEventListener("mousedown", this.clickHandler);
                    window.addEventListener("keydown", this.keydownHandler);
                }, 10);
            }
        },

        unbindCloseEvent() {
            window.removeEventListener("mousedown", this.clickHandler);
            window.removeEventListener("keydown", this.keydownHandler);
        },

        clickHandler(e) {
            if (this.isInnerElement(e.target)) {
                return;
            }
            this.close();
        },

        keydownHandler(e) {
            //ESC
            if (e.keyCode !== 27) {
                return;
            }
            this.close();
        },

        //=============================================================================

        isInnerElement(elem) {
            if (this.$el === elem) {
                return true;
            }
            try {
                return this.$el.contains(elem);
            } catch (e) {
            }
            return false;
        },

        isParentElement(elem) {
            if (!this.targetElement) {
                return false;
            }
            let parent = this.targetElement.parentNode;
            while (parent) {
                if (parent === elem) {
                    return true;
                }
                parent = parent.parentNode;
            }
            return false;
        },

        close() {
            if (!this.show) {
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
            const containerRect = getRect(this.container || window);

            //target element for bind scroll
            this.targetElement = getElement(this.target);

            const targetRect = getRect(this.target);

            //fix for arrow size
            const arrowSize = 10;
            targetRect.left -= arrowSize;
            targetRect.top -= arrowSize;
            targetRect.width += arrowSize * 2;
            targetRect.height += arrowSize * 2;

            this.updateContentHeight();

            const rect = getRect(`.${this.classId}`);

            //console.log(containerRect, targetRect, rect);
            
            this.positionInfo = getBestPosition(
                containerRect,
                targetRect,
                rect,
                this.positions,
                //previous position info for keeping position if has animation (dynamic size) 
                this.positionInfo
            );

            let noChange = true;
            for (const k in this.info) {
                if (this.info[k] !== this.positionInfo[k]) {
                    noChange = false;
                    break;
                }
            }
            if (noChange) {
                return this;
            }
           
            for (const k in this.info) {
                this.info[k] = this.positionInfo[k];
            }
            this.$emit("update");
            return this;
        },

        updateContentHeight() {
            this.$el.style.height = "auto";
            const elem = this.$el.querySelector(".lui-popover-content");
            elem.style.height = "auto";
            
            const br = elem.getBoundingClientRect();
            const rect = toRect(br);
            const ch = rect.height;

            this.contentOverflow = false;
            //fix for min/max height
            if (ch > this.maxHeight) {
                elem.style.height = `${this.maxHeight}px`;
                this.contentOverflow = true;
            } else if (ch < this.minHeight) {
                elem.style.height = `${this.minHeight}px`;
            }

        },

        //=============================================================================

        updateStop() {
            clearTimeout(this.timeout_update_next);
            clearTimeout(this.timeout_update_stop);
            return this;
        },

        updateStart(freq = 10, timeout = 1000) {
            this.updateStop();
            this.updateNext(freq);
            this.timeout_update_stop = setTimeout(() => {
                this.updateStop();
            }, timeout);
            return this;
        },

        updateNext(freq) {
            this.update();
            this.timeout_update_next = setTimeout(() => {
                this.updateNext();
            }, freq);
        },

        updateEnd() {
            this.updateStop();
            this.update();
            return this;
        }
    }
};

Popover.getDefaultPositions = getDefaultPositions;
Popover.create = (option, container) => {
    return createElement(Popover, option, container);
};

export default Popover;
</script>

<style lang="scss" scoped>
.lui-popover {
    position: absolute;
    visibility: visible;
    z-index: 1000;
    opacity: 1;
    margin: 0;
    padding: 16px 16px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: opacity 0.2s linear, visibility 0.2s linear;

    .lui-popover-title {
        font-weight: bold;
    }

    .lui-popover-content {
        margin: 0;
        padding: 0;
    }

    .lui-popover-content-overflow {
        overflow-y: auto;
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
