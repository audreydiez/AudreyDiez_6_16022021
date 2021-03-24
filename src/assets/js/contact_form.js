/*
 Get fields
*/

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const ariaErrorBloc = document.getElementById("errors-display");




const formCheck = {
    global : false,
    inputs : {
        firstName : false,
        lastName : false,
        email : false,
        message : false,
    },
    messages : {
        firstName : "Votre prénom doit contenir au moins deux caractères.",
        lastName : "Votre nom doit contenir au moins deux caractères.",
        email : "Vous devez entrer un email valide.",
        message : "Vous devez entrer un message d'au moins 20 caractères"
    },
    globalErrorMessage :"Le formulaire n'a pas été validé car au moins un champ n'était pas valide :",
    data : {
        firstName : "",
        lastName : "",
        email : "",
        message : ""
    }
}

// Set error message in form
let errorTitle = document.createElement('p');
errorTitle.textContent = formCheck.globalErrorMessage;
if(ariaErrorBloc!== null) ariaErrorBloc.appendChild(errorTitle);




function checkInputs (input) {


    if (input.toString() === "firstName"){

        let matchName = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
        if (!matchName.test(firstName.value)) {
            formCheck.inputs.firstName = false;
            toggleErrorMsg(input);
        }
        else {
            formCheck.inputs.firstName = true;
            hideErrorMsg(input);
            formCheck.data.firstName = firstName.value;
        }
    }

    else if (input.toString() === "lastName"){

        let matchLastName = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
        if (!matchLastName.test(lastName.value)) {
            formCheck.inputs.lastName = false;
            toggleErrorMsg(input);
        }
        else {
            formCheck.inputs.lastName = true;
            hideErrorMsg(input);
            formCheck.data.lastName = lastName.value;
        }
    }

    else if (input.toString() === "email"){
        let matchEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!matchEmail.test(email.value)) {
            formCheck.inputs.email = false;
            toggleErrorMsg(input);
        }
        else {
            formCheck.inputs.email = true;
            hideErrorMsg(input);
            formCheck.data.email = email.value;
        }
    }

    else if (input.toString() === "message"){
        let matchMessage = /^(?=.{2,40}$)[a-zA-Z0-9]+(?:[-'\s][a-zA-Z0-9]+)*$/;
        if (!matchMessage.test(message.value)) {
            formCheck.inputs.message = false;
            toggleErrorMsg(input);
        }
        else {
            formCheck.inputs.message = true;
            hideErrorMsg(input);
            formCheck.data.message = message.value;
        }

    }

}

function toggleErrorMsg (input){
   // Notification for SR
   //  let ariaErrorBloc = document.getElementById("errors-display");
   //
   //
   //  let error_text = document.createElement('p');
   //  error_text.textContent = "- "+formCheck.messages[input];
   //  error_text.classList.add("error-"+input);
   //  ariaErrorBloc.appendChild(error_text);
   //  ariaErrorBloc.style.display = "block";
    ariaErrorBloc.style.display = "block";

    // Notification under each input
    let element = document.getElementById(input.toString() + "-msg");
    element.style.display = "block";
    element.setAttribute("role", "alert");
    eval(input).style.border = "2px solid #901C1C";
    element.innerHTML = formCheck.messages[input];
}

function hideErrorMsg (input){
    // Remove error in error display for SR
    // let ariaErrorBloc = document.getElementById("errors-display");
    // let errorToRemove = document.querySelectorAll("error-"+input);
    //
    // ariaErrorBloc.removeChild(errorToRemove);
    ariaErrorBloc.style.display = "none";

    // Remove error under input
    let element = document.getElementById(input.toString() + "-msg");
    element.style.display = "none";
    eval(input).style.border = "2px solid transparent";
}

function formCheckIsValid(){
    formCheck.global = true;

    for (let input in formCheck.inputs) {
        if (!formCheck.inputs[input]){
            formCheck.global = false;
            console.log("form false!");
        }
    }
}

export function submitEngine () {

    for (let input in formCheck.inputs) {

        checkInputs(input);



    }
    formCheckIsValid();

    if (formCheck.global){
        console.log(formCheck.data);
    }

}

