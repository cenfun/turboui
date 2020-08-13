import util from "./helper/util.js";
export const Util = util;

import ce from "./helper/create-element.js";
export const createElement = ce;

import button from "./components/button/button.vue";
export const TuiButton = button;

import checkbox from "./components/checkbox/checkbox.vue";
export const TuiCheckbox = checkbox;

import input from "./components/input/input.vue";
export const TuiInput = input;

import modal from "./components/modal/modal.vue";
export const TuiModal = modal;

import radio from "./components/radio/radio.vue";
export const TuiRadio = radio;

export default {
    Util,
    createElement,

    TuiButton,
    TuiCheckbox,
    TuiInput,
    TuiModal,
    TuiRadio
};

