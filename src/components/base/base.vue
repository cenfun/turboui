<script>
export default {

    model: {
        prop: "parentModelValue",
        event: "model-change"
    },

    props: {
        parentModelValue: {
            type: [String, Boolean, Number, Object],
            default: null
        },
        value: {
            type: String,
            default: ""
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
            modelValue: this.parentModelValue
        };
    },

    watch: {
        parentModelValue: function(nv) {
            this.modelValue = this.parentModelValue;
        },
        modelValue: function(nv) {
            this.$emit("model-change", nv);
        }
    },

    created() {
        
    }

};
</script>
<style lang="scss">
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