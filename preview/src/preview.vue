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

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiPopover
                </div>
                <div class="lui-item-example lui-flex-auto lui-popover-example">
                    <LuiButton @click.native="openPopover">
                        Open Popover
                    </LuiButton>

                    <div style="background: #f5f5f5; margin-top: 10px;">
                        <div class="lui-popup-arrow-example" />
                    </div>

                    <div style="position: relative; width: 520px; height: 360px; border: 1px solid #ccc; margin-top: 10px;">
                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="bottom-right"
                            :target="{left:20,top:10}"
                            :width="100"
                        >
                            bottom-right
                        </LuiPopover>
                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="bottom-center"
                            :target="{left:260,top:10}"
                            :width="100"
                        >
                            bottom-center
                        </LuiPopover>
                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="bottom-left"
                            :target="{left:500,top:10}"
                            :width="100"
                        >
                            bottom-left
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="left-bottom"
                            :target="{left:510,top:90}"
                            :width="100"
                        >
                            left-bottom
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="left-center"
                            :target="{left:510,top:180}"
                            :width="100"
                        >
                            left-center
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="left-top"
                            :target="{left:510,top:270}"
                            :width="100"
                        >
                            left-top
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="top-left"
                            :target="{left:500,top:350}"
                            :width="100"
                        >
                            top-left
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="top-center"
                            :target="{left:260,top:350}"
                            :width="100"
                        >
                            top-center
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="top-right"
                            :target="{left:20,top:350}"
                            :width="100"
                        >
                            top-right
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="right-top"
                            :target="{left:10,top:270}"
                            :width="100"
                        >
                            right-top
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="right-center"
                            :target="{left:10,top:180}"
                            :width="100"
                        >
                            right-center
                        </LuiPopover>

                        <LuiPopover
                            :attach-to-body="false"
                            :auto-close="false"
                            :bind-resize="false"
                            :bind-scroll="false"
                            positions="right-bottom"
                            :target="{left:10,top:90}"
                            :width="100"
                        >
                            right-bottom
                        </LuiPopover>
                    </div>
                </div>
            </div>

            <div class="lui-item lui-flex-row">
                <div class="lui-item-name">
                    LuiTooltip
                </div>
                <div class="lui-item-example lui-flex-auto lui-flex-row">
                    <LuiButton tooltip="This is LuiTooltip">
                        Hover Tooltip
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
    LuiPopover,
    LuiRadio,
    LuiTooltip
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
        LuiRadio,
        LuiPopover
    },

    mounted() {
        const tooltips = Array.prototype.slice.call(document.querySelectorAll("[tooltip]"));
        const self = this;
        tooltips.forEach(item => {
            if (!item) {
                return;
            }
            item.addEventListener("mouseenter", function() {
                self.showTooltip(this);
            });
            item.addEventListener("mouseleave", function() {
                self.hideTooltip(this);
            });
        });
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
        },

        openPopover: function(e) {
            LuiPopover.create((h) => {
                return {
                    props: {
                        target: e.target,
                        title: "Popover Title"
                    },
                    scopedSlots: {
                        default: (props) => {
                            return [h(LuiCheckbox, {
                                props: {
                                    label: "Popover Checkbox 1"
                                }
                            }), h(LuiCheckbox, {
                                props: {
                                    label: "Popover Checkbox 2"
                                }
                            }), h(LuiCheckbox, {
                                props: {
                                    label: "Popover Checkbox 3"
                                }
                            })];
                        }
                    }
                };
            });
        },

        showTooltip: function(elem) {
            if (!elem) {
                return;
            }
            elem.$tooltip = LuiTooltip.create((h) => {
                return {
                    props: {
                        title: elem.getAttribute("tooltip")
                    }
                };
            });
        },

        hideTooltip: function(elem) {
            if (elem && elem.$tooltip) {
                elem.$tooltip.$destroy();
                elem.$tooltip = null;
            }
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

.lui-popover-example .lui-popover-content {
    text-align: center;
}

.lui-popup-arrow-example {
    height: 54px;
    background-repeat: no-repeat;
    background-image: url(../../src/components/popup/popup-arrow.svg);
}
</style>