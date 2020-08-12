export default function(el) {
    el.addEventListener("focus", e => {
        el.select();
    });
}