<script>
export default {};
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