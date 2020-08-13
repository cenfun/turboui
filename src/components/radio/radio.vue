<template>
    <div class="tui tui-radio">
        <input
            :id="id"
            :checked="modelValue === value"
            class="tui-radio-input"
            :disabled="disabled"
            :name="name"
            type="radio"
            @change="onChange"
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
import FormBase from "../base/form-base.vue";
import Util from "../../helper/util.js";
export default {

    extends: FormBase,

    props: {
        name: {
            type: String,
            default: ""
        },
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

    created() {
        if (Util.isInvalid(this.modelValue)) {
            this.modelValue = this.checked;
        }
    },

    methods: {
        onChange: function(e) {
            this.modelValue = e.target.checked ? this.value : "";
        }
    }
};
</script>
<style lang="scss">
.tui-radio {
    position: relative;
    display: inline-block;
    padding-left: 22px;
    padding-right: 2px;
    height: 30px;
    line-height: 30px;

    .tui-radio-label {
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
            border-radius: 50%;
            content: "";
            background: #fff;
            border: #adb5bd solid 1px;
        }

        &::after {
            position: absolute;
            top: 10px;
            left: -17px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            content: "";
            display: none;
            background: #0077cf;
        }
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

        &:disabled ~ .tui-radio-label {
            color: #6c757d;
        }

        &:disabled ~ .tui-radio-label::before {
            border-color: #e9ecef;
        }

        &:checked ~ .tui-radio-label::before {
            border-color: #0077cf;
        }

        &:focus ~ .tui-radio-label::before {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        &:focus:not(:checked) ~ .tui-radio-label::before {
            border-color: #80bdff;
        }

        &:not(:disabled):active ~ .tui-radio-label::before {
            color: #fff;
            border-color: #b3d7ff;
        }

        &:not(:checked) ~ .tui-radio-label:hover::before {
            border-color: #888;
        }

        &:disabled:checked ~ .tui-radio-label::before {
            border-color: rgba(0, 123, 255, 0.5);
        }

        &:checked ~ .tui-radio-label::after {
            display: block;
        }
    }
}

</style>
