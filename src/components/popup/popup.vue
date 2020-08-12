<template>
    <div class="gui-popup">
        <div class="gui-popup-main">
            <div class="gui-popup-header">
                {{ title }}
            </div>
            <div class="gui-popup-content">
                <slot />
            </div>
        </div>
        <div class="gui-popup-close">
            X
        </div>
    </div>
</template>

<script>
import createElement from "../../helper/create-element.js";

const Popup = {

    props: {
        title: {
            type: String,
            default: ""
        }
    },

    mounted() {
        if (!this.$el.parentNode) {
            document.body.appendChild(this.$el);
        }

        //close event handler

        const bindEvents = (e) => {
            const $main = this.$el.querySelector(".gui-popup-main");
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

Popup.create = (option, container) => {
    return createElement(Popup, option, container);
};

export default Popup;
</script>
<style lang="scss">
.gui-popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.gui-popup-close {
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

.gui-popup-main {
    background: #fff;
    border-radius: 10px;
    position: absolute;
    left: 20%;
    right: 20%;
    top: 20%;
    bottom: 20%;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.gui-popup-header {
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}

.gui-popup-content {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    position: relative;
}

.gui-popup-label {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}

.gui-popup-item {
    padding: 5px 5px;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
}

.gui-popup-item:hover {
    background-color: #f5f5f5;
}

.gui-popup-line {
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.gui-popup-tip {
    color: #666;
    word-break: break-all;
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.gui-popup-arrow {
    display: inline-block;
    width: 16px;
    height: 16px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%23333' d='M3,2V11Q3,13,5,13H12.5L10.5,15H12L14.5,12.5L12,10H10.5L12.5,12H5Q4,12,4,11V2z'/%3e%3c/svg%3e");
}

.gui-popup-table {
    margin-top: 5px;
    position: relative;
    border-collapse: collapse;
    width: 100%;
}

.gui-popup-table th,
.gui-popup-table td {
    text-align: left;
    border: 1px solid #eee;
    padding: 5px 5px;
}

.gui-popup-nowrap {
    white-space: nowrap;
}
</style>
