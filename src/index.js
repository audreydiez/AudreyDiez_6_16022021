import "./assets/scss/style.scss";

import { submitEngine } from "./contact_form";

const ENV_prod = false;


const contactFormBtn = document.querySelectorAll(".contactForm");
const backgroundMask = document.getElementById("backgroundMask");
const contactFormContent = document.getElementById("contactFormModal");
const closeModalBtn = document.querySelectorAll(".closeModal");



// If we are in dev mode, display all elements for screen readers
document.addEventListener("DOMContentLoaded", function() {
    if (!ENV_prod){
        let elements = document.querySelectorAll('.sr-only');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("sr-only");
        }
    }
});

console.log(contactFormContent);
if (contactFormBtn !== null && contactFormContent !== null){

    // Open modal for contactForm
    contactFormBtn.forEach((btn) => btn.addEventListener("click", openContactForm));

    // Close modal for contactForm
    contactFormContent.addEventListener('click', (e) => e.stopPropagation());
    backgroundMask.addEventListener('click',  closeContactForm);
    closeModalBtn.forEach((btn) => btn.addEventListener("click", closeContactForm));
}






function openContactForm() {
    backgroundMask.style.display = "flex";
}

function closeContactForm() {
    backgroundMask.style.display = "none";
}

function launchEngine(e) {

    console.log("closing form");
    e.preventDefault();
    submitEngine();

}

window.launchEngine = launchEngine;