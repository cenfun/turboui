<template>
    <div class="lui lui-modal">
        <div class="lui-modal-main lui-flex-column" :style="styleMain">
            <div class="lui-modal-header">
                {{ title }}
            </div>
            <div v-if="spaceAfterHeader" class="lui-vs-10" />
            <div class="lui-modal-content lui-flex-auto">
                <slot />
            </div>
        </div>
        <div class="lui-modal-close">
            X
        </div>
    </div>
</template>

<script>
import Base from "../base/base.vue";
import createElement from "../../helper/create-element.js";

const Modal = {

    extends: Base,

    props: {
        padding: {
            type: String,
            default: "20%"
        },
        spaceAfterHeader: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        styleMain: function() {
            return {
                left: this.padding,
                right: this.padding,
                top: this.padding,
                bottom: this.padding
            };
        }
    },

    mounted() {
        if (!this.$el.parentNode) {
            document.body.appendChild(this.$el);
        }

        //close event handler

        const bindEvents = (e) => {
            const $main = this.$el.querySelector(".lui-modal-main");
            if ($main === e.target || $main.contains(e.target)) {
                return;
            }
            document.removeEventListener("click", bindEvents);
            this.$destroy();
        };

        setTimeout(() => {
            document.addEventListener("click", bindEvents);
        }, 100);

    },

    beforeDestroy() {
        const p = this.$el.parentNode;
        if (p) {
            p.removeChild(this.$el);
        }
    }

};

Modal.create = (option, container) => {
    return createElement(Modal, option, container);
};

export default Modal;
</script>
<style lang="scss">
.lui-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.lui-modal-close {
    position: absolute;
    top: 20%;
    right: 20%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #fff;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    margin-top: -15px;
    margin-right: -15px;
    line-height: 40px;
}

.lui-modal-main {
    background: #fff;
    border-radius: 10px;
    position: absolute;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}

.lui-modal-header {
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}

.lui-modal-content {
    width: 100%;
    overflow-y: auto;
    position: relative;
}

.lui-modal-label {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

.lui-modal-item {
    padding: 5px 5px;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
}

.lui-modal-item:hover {
    background-color: #f5f5f5;
}

.lui-modal-line {
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.lui-modal-tip {
    color: #666;
    word-break: break-all;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.lui-modal-arrow {
    display: inline-block;
    width: 16px;
    height: 16px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23333' d='M3,2V11Q3,13,5,13H12.5L10.5,15H12L14.5,12.5L12,10H10.5L12.5,12H5Q4,12,4,11V2z'/%3e%3c/svg%3e");
}

.lui-modal-table {
    margin-top: 5px;
    position: relative;
    border-collapse: collapse;
    width: 100%;
}

.lui-modal-table th,
.lui-modal-table td {
    text-align: left;
    border: 1px solid #eee;
    padding: 5px 5px;
}

.lui-modal-nowrap {
    white-space: nowrap;
}
</style>
