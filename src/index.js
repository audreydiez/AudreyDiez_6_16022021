import "./assets/scss/style.scss";
const ENV_prod = false;

// If we are in dev mode, display all elements for screen readers
document.addEventListener("DOMContentLoaded", function() {
    if (!ENV_prod){
        let elements = document.querySelectorAll('.sr-only');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("sr-only");
        }
    }
});