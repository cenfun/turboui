<template>
    <div class="lui-preview lui-flex-column">
        <div class="lui-preview-header">
            Lithops UI Preview
        </div>
        <div class="lui-preview-body lui-flex-auto">
            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiInput
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiInput>
                        Name:
                    </LuiInput>
                    <div class="lui-hs-10" />
                    <LuiInput disabled>
                        Disabled:
                    </LuiInput>
                    <div class="lui-hs-10" />
                    <LuiInput placeholder="email">
                        Email:
                    </LuiInput>
                    <LuiInput v-model="inputText" placeholder="width 150px" width="150px" />
                    <div class="lui-hs-5" />
                    <div>{{ inputText }}</div>
                </div>
            </div>

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiButton
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiButton>
                        Button
                    </LuiButton>
                    <div class="lui-hs-5" />
                    <LuiButton disabled>
                        Disabled
                    </LuiButton>
                    <div class="lui-hs-5" />
                    <LuiButton primary>
                        Button Primary
                    </LuiButton>
                </div>
            </div>

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiCheckbox
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiCheckbox>
                        Checkbox
                    </LuiCheckbox>
                    <div class="lui-hs-5" />
                    <div class="lui-hs-5" />
                    <LuiCheckbox v-model="checkboxChecked">
                        Checkbox v-model {{ checkboxChecked }}
                    </LuiCheckbox>

                    <LuiCheckbox disabled>
                        Disabled
                    </LuiCheckbox>
                    <LuiCheckbox v-model="checkboxChecked" disabled>
                        Disabled Checked
                    </LuiCheckbox>
                </div>
            </div>

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiRadio
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiRadio v-model="radioValue" name="radioName" value="1">
                        Radio 1
                    </LuiRadio>
                    <div class="lui-hs-5" />
                    <LuiRadio v-model="radioValue" name="radioName" value="2">
                        Radio 2
                    </LuiRadio>
                    <div class="lui-hs-5" />

                    <LuiInput v-model="radioValue">
                        radioValue:
                    </LuiInput>

                    <div class="lui-hs-5" />
                    <LuiRadio v-model="radioValue" disabled
                              name="radioDisabledName"
                              value="1"
                    >
                        Disabled 1
                    </LuiRadio>
                    <LuiRadio v-model="radioValue" checked disabled
                              name="radioDisabledName"
                              value="2"
                    >
                        Disabled 2
                    </LuiRadio>
                </div>
            </div>

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiModal
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiButton @click.native="openModal">
                        Open Modal
                    </LuiButton>
                </div>
            </div>
        </div>
        <div class="lui-preview-footer">
            &copy; Lithops UI
        </div>
    </div>
</template>
<script>
import LUI, {
    createElement,
    LuiButton,
    LuiCheckbox,
    LuiInput,
    LuiModal,
    LuiRadio
} from "../../src/index.js";

console.log(LUI);

const Demo = {
    data() {
        return {
            inputText: "",
            checkboxChecked: true,
            radioValue: ""
        };
    },

    components: {
        LuiButton,
        LuiCheckbox,
        LuiInput,
        LuiRadio
    },

    methods: {
        openModal: function() {
           

            LuiModal.create((h) => {
                return {
                    props: {
                        title: "Model Title"
                    },
                    scopedSlots: {
                        default: (props) => {
                            return h(LuiCheckbox, {
                                props: {
                                    label: "Model Checkbox"
                                }
                            });
                        }
                    }
                };
            });

        }
    }
};

Demo.create = (option, container) => {
    return createElement(Demo, option, container);
};

export default Demo;
</script>
<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
}

.lui-preview {
    height: 100%;
}

.lui-preview-header {
    padding: 10px 10px;
    font-weight: bold;
    font-size: 16px;
    background: #eee;
    border-bottom: 1px solid #ccc;
}

.lui-preview-body {
    padding: 10px 10px;
}

.lui-item-name {
    width: 120px;
}

.lui-item-example {
    border-left: 1px solid #ccc;
    padding: 5px 0 5px 10px;
}

.lui-preview-footer {
    padding: 5px 5px;
    background: #eee;
}
</style>