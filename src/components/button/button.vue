<template>
    <button :class="className" :disabled="disabled">
        <template v-if="label">
            {{ label }}
        </template>
        <template v-else>
            <slot />
        </template>
    </button>
</template>
<script>
import FormBase from "../base/form-base.vue";
export default {

    extends: FormBase,

    props: {
        primary: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        className: function() {
            const ls = [
                "lui",
                "lui-button"
            ];
            if (this.primary) {
                ls.push("lui-button-primary");
            }
            return ls;
        }
    }

};
</script>
<style lang="scss">
.lui-button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: #f5f5f5;
    border: 1px solid transparent;
    padding: 2px 8px;
    line-height: 1.5;
    border-radius: 5px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #6c757d;
    border-color: #6c757d;
    min-width: 65px;
    white-space: nowrap;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:disabled {
        opacity: 0.65;
    }

    &:not(:disabled) {
        cursor: pointer;
    }

    &:not(:disabled):hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    &.lui-button-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;

        &:hover {
            color: #fff;
            background-color: #0069d9;
            border-color: #0062cc;
        }

        &:focus {
            box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
        }

        &:disabled {
            opacity: 0.65;
            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;
        }
    }
}

</style>