<template>
    <div class="gui-checkbox">
        <input
            :id="id"
            :checked="value"
            class="gui-checkbox-input"
            type="checkbox"
            @change="$emit('change', $event.target.checked)"
        >
        <label class="gui-checkbox-label" :for="id"><slot /></label>
    </div>
</template>
<script>
import Util from "../../helper/util.js";
export default {
    model: {
        prop: "value",
        event: "change"
    },
    props: {
        value: {
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
<style>
.gui-checkbox {
    position: relative;
    display: inline-block;
    padding-left: 22px;
    padding-right: 2px;
    height: 30px;
    line-height: 30px;
}

.gui-checkbox-input {
    width: 22px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

.gui-checkbox-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    height: 30px;
    display: inline-block;
    white-space: nowrap;
}

.gui-checkbox-label::before {
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
}

.gui-checkbox .gui-checkbox-label::before {
    border-radius: 3px;
}

.gui-checkbox-input:disabled ~ .gui-checkbox-label::before {
    background-color: #e9ecef;
}

.gui-checkbox-input:checked ~ .gui-checkbox-label::before {
    color: #fff;
    border-color: #0077cf;
    background-color: #0077cf;
}

.gui-checkbox-input:focus ~ .gui-checkbox-label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.gui-checkbox-input:focus:not(:checked) ~ .gui-checkbox-label::before {
    border-color: #80bdff;
}

.gui-checkbox-input:disabled ~ .gui-checkbox-label {
    color: #6c757d;
}

.gui-checkbox-input:not(:disabled):active ~ .gui-checkbox-label::before {
    color: #fff;
    background-color: #b3d7ff;
    border-color: #b3d7ff;
}

.gui-checkbox-label::after {
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

.gui-checkbox .gui-checkbox-input:checked ~ .gui-checkbox-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.gui-checkbox .gui-checkbox-input:indeterminate ~ .gui-checkbox-label::before {
    border-color: #0077cf;
    background-color: #0077cf;
}

.gui-checkbox .gui-checkbox-input:not(:checked) ~ .gui-checkbox-label:hover::before {
    border-color: #888;
}

.gui-checkbox .gui-checkbox-input:indeterminate ~ .gui-checkbox-label::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.gui-checkbox .gui-checkbox-input:disabled:checked ~ .gui-checkbox-label::before {
    background-color: rgba(0, 123, 255, 0.5);
}

.gui-checkbox .gui-checkbox-input:disabled:indeterminate ~ .gui-checkbox-label::before {
    background-color: rgba(0, 123, 255, 0.5);
}
</style>
