import "./assets/scss/style.scss";
import { submitEngine } from "./assets/js/contact_form";
import {App} from "./assets/js/utils/app";
import { } from "./assets/js/classes/custom-select";

const contactFormBtn = document.querySelectorAll(".contactForm");
const backgroundMask = document.getElementById("backgroundMask");
const contactFormContent = document.getElementById("contactFormModal");
const closeModalBtn = document.querySelectorAll(".closeModal");
const goToContent = document.getElementById("go-content");
const lastBtnModal = document.getElementById("lastBtnModal");


// Build index
new App();



window.addEventListener("scroll",function(){

    if(document.getElementById("go-content") != null){
        if(window.pageYOffset > 100){
            goToContent.style.display = "block";
        }
        else if(window.pageYOffset < 100){
            goToContent.style.display = "none";
        }
    }

},false);

export function setModalForm () {
    if (contactFormBtn !== null && contactFormContent !== null){

        // Open modal for contactForm
        contactFormBtn.forEach((btn) => btn.addEventListener("click", openContactForm));

        // Close modal for contactForm
        contactFormContent.addEventListener('click', (e) => e.stopPropagation());
        backgroundMask.addEventListener('click',  closeContactForm);
        closeModalBtn.forEach((btn) => btn.addEventListener("click", closeContactForm));

        // Keep focus in modal
        lastBtnModal.addEventListener('keydown', (e) => {
            if (e.keyCode === 9 ) {
                document.getElementById('closeModalOff').focus();
            }
        });

    }
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
