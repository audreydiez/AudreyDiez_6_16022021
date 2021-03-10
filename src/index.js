import "./assets/scss/style.scss";


import { submitEngine } from "./assets/js/contact_form";
import {Lightbox, backgroundMaskLightbox} from "./assets/js/lightbox";
import {App} from "./app";

const JSON_url = "./src/data.json";


// Build index
new App(JSON_url);




const ENV_prod = true;


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




export function setModalForm () {
    if (contactFormBtn !== null && contactFormContent !== null){

        // Open modal for contactForm
        contactFormBtn.forEach((btn) => btn.addEventListener("click", openContactForm));

        // Close modal for contactForm
        contactFormContent.addEventListener('click', (e) => e.stopPropagation());
        backgroundMask.addEventListener('click',  closeContactForm);
        closeModalBtn.forEach((btn) => btn.addEventListener("click", closeContactForm));
    }
}

// Lightbox

if (backgroundMaskLightbox !== null) {
    Lightbox.init();
}



function openContactForm() {
    backgroundMask.style.display = "flex";


}

function closeContactForm() {
    backgroundMask.style.display = "none";
}

function launchEngine(e) {


    e.preventDefault();
    submitEngine();

}



window.launchEngine = launchEngine;
//