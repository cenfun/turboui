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
.lui,
.lui ::before,
.lui ::after,
.lui *,
.lui *::before,
.lui *::after {
    box-sizing: border-box;
}

.lui {
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

/*
layout
*/

.lui-hs-5 {
    display: inline-block;
    width: 5px;
    height: 100%;
}

.lui-hs-10 {
    display: inline-block;
    width: 10px;
    height: 100%;
}

.lui-vs-5 {
    display: block;
    height: 5px;
}

.lui-vs-10 {
    display: block;
    height: 10px;
}

.lui-flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
}

.lui-flex-column {
    display: flex;
    flex-direction: column;
    position: relative;
}

.lui-flex-auto {
    flex: 1 1 0%;
    overflow: hidden;
}

</style>