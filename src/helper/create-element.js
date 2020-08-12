import Vue from "vue";
import Util from "./util.js";
export default function createElement(vNode, option, container) {
    const ref = Util.token(16, "ref-");
    const v = new Vue({
        render: h => {
            if (typeof (option) === "function") {
                option = option.call(this, h);
            }
            option.ref = ref;
            return h(vNode, option);
        }
    }).$mount(container);
    return v.$refs[ref];
}
