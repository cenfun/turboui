<template>
    <div class="tui-demo tui-flex-column">
        <div class="tui-demo-header">
            Turbo UI Demo
        </div>
        <div class="tui-demo-body tui-flex-auto">
            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiButton
                </div>
                <div class="tui-item-example tui-flex-auto">
                    <TuiButton>
                        Button
                    </TuiButton>
                    <TuiButton primary>
                        Button Primary
                    </TuiButton>
                </div>
            </div>


            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiCheckbox
                </div>
                <div class="tui-item-example tui-flex-auto">
                    <TuiCheckbox>
                        Checkbox
                    </TuiCheckbox>
                    <TuiCheckbox v-model="checkboxChecked">
                        Checkbox v-model
                    </TuiCheckbox>
                </div>
            </div>

            <div class="tui-item tui-flex-row">
                <div class="tui-item-name">
                    TuiInput
                </div>
                <div class="tui-item-example tui-flex-auto tui-flex-row">
                    <TuiInput>
                        Name:
                    </TuiInput>
                    <div class="tui-hs-10" />
                    <TuiInput placeholder="email">
                        Email:
                    </TuiInput>
                    <TuiInput placeholder="width 150px" width="150px" />
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
        <div class="tui-demo-footer">
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
    TuiModal
} = TUI;

const Demo = {
    data() {
        return {
            checkboxChecked: true
        };
    },

    components: {
        TuiButton,
        TuiCheckbox,
        TuiInput
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
                            return h(TuiButton, {
                                props: {
                                    text: "Model Button"
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

.tui-demo {
    height: 100%;
}

.tui-demo-header {
    padding: 10px 10px;
    font-weight: bold;
    font-size: 16px;
    background: #eee;
    border-bottom: 1px solid #ccc;
}

.tui-demo-body {
    padding: 10px 10px;
}

.tui-item-name {
    width: 120px;
}

.tui-item-example {
    border-left: 1px solid #ccc;
    padding: 5px 0 5px 10px;
}

.tui-demo-footer {
    padding: 5px 5px;
    background: #eee;
}
</style>