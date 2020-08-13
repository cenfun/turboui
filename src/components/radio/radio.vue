<template>
    <div class="lui lui-radio">
        <input
            :id="id"
            :checked="modelValue === value"
            class="lui-radio-input"
            :disabled="disabled"
            :name="name"
            type="radio"
            @change="onChange"
        >
        <label class="lui-radio-label" :for="id">
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
.lui-radio {
    position: relative;
    display: inline-block;
    padding-left: 22px;
    padding-right: 2px;
    height: 30px;
    line-height: 30px;

    .lui-radio-label {
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

    .lui-radio-input {
        width: 22px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        padding: 0;
        margin: 0;

        &:checked {
            ~ .lui-radio-label {
                &::before {
                    border-color: #0077cf;
                }

                &::after {
                    display: block;
                }
            }
        }

        &:disabled {
            ~ .lui-radio-label {
                color: #6c757d;
            }

            ~ .lui-radio-label::before {
                background-color: #e9ecef;
            }
        }

        &:focus {
            ~ .lui-radio-label::before {
                box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
            }
        }

        &:focus:not(:checked) {
            ~ .lui-radio-label::before {
                border-color: #80bdff;
            }
        }

        &:disabled:checked {
            ~ .lui-radio-label {
                &::before {
                    border-color: #80bdff;
                }

                &::after {
                    background-color: rgba(0, 123, 255, 0.5);
                }
            }
        }

        &:not(:disabled):not(:checked):not(:focus) {
            ~ .lui-radio-label:hover::before {
                border-color: #888;
            }
        }
    }
}

</style>
