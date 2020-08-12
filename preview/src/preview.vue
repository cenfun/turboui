<template>
    <div class="tui-preview tui-flex-column">
        <div class="tui-preview-header">
            TUI Preview
        </div>
        <div class="tui-preview-body tui-flex-auto">
            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiInput
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiInput>
                        Name:
                    </TuiInput>
                    <div class="tui-hs-10" />
                    <TuiInput disabled>
                        Disabled:
                    </TuiInput>
                    <div class="tui-hs-10" />
                    <TuiInput placeholder="email">
                        Email:
                    </TuiInput>
                    <TuiInput v-model="inputText" placeholder="width 150px" width="150px" />
                    <div class="tui-hs-5" />
                    <div>{{ inputText }}</div>
                </div>
            </div>

            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiButton
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiButton>
                        Button
                    </TuiButton>
                    <div class="tui-hs-5" />
                    <TuiButton disabled>
                        Disabled
                    </TuiButton>
                    <div class="tui-hs-5" />
                    <TuiButton primary>
                        Button Primary
                    </TuiButton>
                </div>
            </div>

            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiCheckbox
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiCheckbox>
                        Checkbox
                    </TuiCheckbox>
                    <div class="tui-hs-5" />
                    <TuiCheckbox disabled>
                        Disabled
                    </TuiCheckbox>
                    <div class="tui-hs-5" />
                    <TuiCheckbox v-model="checkboxChecked">
                        Checkbox v-model {{ checkboxChecked }}
                    </TuiCheckbox>
                </div>
            </div>

            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiRadio
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiRadio v-model="radioValue" value="1">
                        Radio 1
                    </TuiRadio>
                    <div class="tui-hs-5" />
                    <TuiRadio v-model="radioValue" value="2">
                        Radio 2
                    </TuiRadio>
                    <div class="tui-hs-5" />
                    <div>{{ radioValue }}</div>
                </div>
            </div>

            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiModal
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiButton @click.native="openModal">
                        Open Modal
                    </TuiButton>
                </div>
            </div>
        </div>
        <div class="tui-preview-footer">
            &copy; TUI
        </div>
    </div>
</template>
<script>
import TUI from "../../src/index.js";
const {
    createElement,
    TuiButton,
    TuiCheckbox,
    TuiInput,
    TuiModal,
    TuiRadio
} = TUI;

const Demo = {
    data() {
        return {
            inputText: "",
            checkboxChecked: true,
            radioValue: ""
        };
    },

    components: {
        TuiButton,
        TuiCheckbox,
        TuiInput,
        TuiRadio
    },

    methods: {
        openModal: function() {
           

            TuiModal.create((h) => {
                return {
                    props: {
                        title: "Model Title"
                    },
                    scopedSlots: {
                        default: (props) => {
                            return h(TuiCheckbox, {
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

.tui-preview {
    height: 100%;
}

.tui-preview-header {
    padding: 10px 10px;
    font-weight: bold;
    font-size: 16px;
    background: #eee;
    border-bottom: 1px solid #ccc;
}

.tui-preview-body {
    padding: 10px 10px;
}

.tui-item-name {
    width: 120px;
}

.tui-item-example {
    border-left: 1px solid #ccc;
    padding: 5px 0 5px 10px;
}

.tui-preview-footer {
    padding: 5px 5px;
    background: #eee;
}
</style>