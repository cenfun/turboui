<template>
    <div class="tui tui-radio">
        <input
            :id="id"
            v-model="modelValue"
            :checked="getChecked"
            class="tui-radio-input"
            :name="name"
            type="radio"
            :value="value"
        >
        <label class="tui-radio-label" :for="id">
            <template v-if="label">
                {{ label }}
            </template>
            <template v-else>
                <slot />
            </template>
        </label>
    </div>
</template>
<script>
import Base from "../base/base.vue";
import Util from "../../helper/util.js";
export default {

    extends: Base,

    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            id: Util.token(8, "radio-")
        };
    },

    computed: {
        getChecked: function() {
            if (this.modelValue === undefined) {
                return this.checked;
            }
            return this.modelValue === this.value;
        }
    }
};
</script>
<style>
.tui-radio {
    position: relative;
    display: inline-block;
    padding-left: 22px;
    padding-right: 2px;
    height: 30px;
    line-height: 30px;
}

.tui-radio-input {
    width: 22px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    padding: 0;
    margin: 0;
}

.tui-radio-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    height: 30px;
    display: inline-block;
    white-space: nowrap;
}

.tui-radio-label::before {
    position: absolute;
    top: 7px;
    left: -20px;
    display: block;
    width: 16px;
    height: 16px;
    pointer-events: none;
    content: "";
    background-color: #fff;
    border: #adb5bd solid 1px;
}

.tui-radio .tui-radio-label::before {
    border-radius: 3px;
}

.tui-radio-input:disabled ~ .tui-radio-label::before {
    background-color: #e9ecef;
}

.tui-radio-input:checked ~ .tui-radio-label::before {
    color: #fff;
    border-color: #0077cf;
    background-color: #0077cf;
}

.tui-radio-input:focus ~ .tui-radio-label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.tui-radio-input:focus:not(:checked) ~ .tui-radio-label::before {
    border-color: #80bdff;
}

.tui-radio-input:disabled ~ .tui-radio-label {
    color: #6c757d;
}

.tui-radio-input:not(:disabled):active ~ .tui-radio-label::before {
    color: #fff;
    background-color: #b3d7ff;
    border-color: #b3d7ff;
}

.tui-radio-label::after {
    position: absolute;
    top: 7px;
    left: -20px;
    display: block;
    width: 16px;
    height: 16px;
    content: "";
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
    background-clip: border-box;
}

.tui-radio .tui-radio-input:checked ~ .tui-radio-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.tui-radio .tui-radio-input:indeterminate ~ .tui-radio-label::before {
    border-color: #0077cf;
    background-color: #0077cf;
}

.tui-radio .tui-radio-input:not(:checked) ~ .tui-radio-label:hover::before {
    border-color: #888;
}

.tui-radio .tui-radio-input:indeterminate ~ .tui-radio-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.tui-radio .tui-radio-input:disabled:checked ~ .tui-radio-label::before {
    background-color: rgba(0, 123, 255, 0.5);
}

.tui-radio .tui-radio-input:disabled:indeterminate ~ .tui-radio-label::before {
    background-color: rgba(0, 123, 255, 0.5);
}
</style>
