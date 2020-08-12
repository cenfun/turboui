<script>
export default {

    model: {
        prop: "inputModelValue",
        event: "model-change"
    },

    props: {
        inputModelValue: {
            type: [String, Boolean, Number],
            default: null
        },
        label: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        }
    },

    data() {
        return {
            modelValue: this.inputModelValue
        };
    },

    watch: {
        modelValue: function(nv) {
            this.$emit("model-change", nv);
        }
    },

    created() {
        console.log(this.modelValue);
    }

};
</script>
<style>
@import "./layout.scss";

.tui *,
.tui *::before,
.tui *::after {
    box-sizing: border-box;
}

.tui {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }
}

</style>