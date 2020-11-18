<template>
    <div class="lui lui-input">
        <label class="lui-input-label">
            <template v-if="label">
                {{ label }}
            </template>
            <template v-else>
                <slot />
            </template>
        </label>
        <input v-model="modelValue" v-select
               class="lui-input-input"
               :disabled="disabled"
               :placeholder="placeholder"
               :style="{width:width}"
               :title="title"
        >
    </div>
</template>
<script>
import FormBase from "../../base/form-base.vue";
import selectOnFocus from "../../helper/select-on-focus.js";
export default {

    directives: {
        select: selectOnFocus
    },

    extends: FormBase,

    props: {
        placeholder: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "80px"
        }
    }
};
</script>
<style lang="scss">
.lui-input {
    display: flex;
    flex-direction: row;

    .lui-input-label {
        height: 25px;
        line-height: 25px;
        padding-right: 5px;
        display: inline-block;
    }

    .lui-input-input {
        display: inline-block;
        padding: 2px 5px;
        height: 25px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #aaa;
        border-radius: 5px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:hover {
            border: 1px solid #888;
        }

        &:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        &:disabled {
            border: 1px solid #ccc;
        }
    }
}
</style>