<template>
    <div class="gui-input">
        <label class="gui-input-label"><slot /></label>
        <input v-select class="gui-input-input"
               :placeholder="placeholder"
               :style="{width:width}"
               :title="title"
               :value="value"
               @input="$emit('input', $event.target.value)"
        >
    </div>
</template>
<script>
import selectOnFocus from "../../helper/select-on-focus.js";
export default {
    directives: {
        select: selectOnFocus
    },
    model: {
        prop: "value",
        event: "input"
    },
    props: {
        value: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        title: {
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
<style>
.gui-input {
    display: flex;
    flex-direction: row;
}

.gui-input input {
    margin: 0;
    font-size: inherit;
    overflow: visible;
}

.gui-input-label {
    height: 25px;
    line-height: 25px;
    padding-right: 5px;
    display: inline-block;
}

.gui-input-input {
    display: inline-block;
    padding: 2px 5px;
    height: 25px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.gui-input-input:hover {
    border: 1px solid #aaa;
}

.gui-input-input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>