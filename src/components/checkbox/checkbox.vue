<template>
    <div class="tui tui-checkbox">
        <input
            :id="id"
            v-model="modelValue"
            class="tui-checkbox-input"
            :disabled="disabled"
            type="checkbox"
        >
        <label class="tui-checkbox-label" :for="id">
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
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            id: Util.token(8, "checkbox-")
        };
    }
};
</script>
<style lang="scss">
.tui-checkbox {
    position: relative;
    display: inline-block;
    padding-left: 22px;
    padding-right: 2px;
    height: 30px;
    line-height: 30px;

    .tui-checkbox-label {
        position: relative;
        margin-bottom: 0;
        vertical-align: top;
        height: 30px;
        display: inline-block;
        white-space: nowrap;

        &::before {
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
            border-radius: 3px;
        }

        &::after {
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
    }

    .tui-checkbox-input {
        width: 22px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        padding: 0;
        margin: 0;

        &:disabled ~ .tui-checkbox-label {
            color: #6c757d;
        }

        &:disabled ~ .tui-checkbox-label::before {
            background-color: #e9ecef;
        }

        &:checked ~ .tui-checkbox-label::before {
            color: #fff;
            border-color: #0077cf;
            background-color: #0077cf;
        }

        &:focus ~ .tui-checkbox-label::before {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        &:focus:not(:checked) ~ .tui-checkbox-label::before {
            border-color: #80bdff;
        }

        &:not(:disabled):active ~ .tui-checkbox-label::before {
            color: #fff;
            background-color: #b3d7ff;
            border-color: #b3d7ff;
        }

        &:checked ~ .tui-checkbox-label::after {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }

        &:not(:checked) ~ .tui-checkbox-label:hover::before {
            border-color: #888;
        }

        &:disabled:checked ~ .tui-checkbox-label::before {
            background-color: rgba(0, 123, 255, 0.5);
        }
    }
}

</style>
