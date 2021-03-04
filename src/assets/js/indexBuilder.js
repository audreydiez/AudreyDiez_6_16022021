import { Photographers} from "./photographers";

export class IndexBuilder{
    constructor(photographers) {
        this.photographers = photographers;

        this.init();
    }

    init(){
        this.renderPhotographersList();
    }

    renderPhotographersList (){
        console.log("J'affiche les photographes");

        const childElement = document.createElement("article");
        const parentElement = document.getElementById("main-content");

        childElement.classList.add("ph-cards__card");
        childElement.setAttribute("id", "ph-card");

        childElement.innerHTML = `
                <a href="photographer.html" aria-label="Voir la page du photographe ${this.photographers[0].name}">
                    <figure class="profile">
                        <img src="assets/images/Portrait_Nora.jpg" alt="Portrait de ${this.photographers[0].name}" class="profile__img">
                        <figcaption class="profile__name">
                            <h2>Mimi Keel</h2>
                        </figcaption>
                    </figure>
                </a>
                <p class="location">${this.photographers[0].city}, ${this.photographers[0].country}</p>
                <p class="quote">${this.photographers[0].tagline}</p>
                <p class="rate">${this.photographers[0].rate}€/jour</p>
                <ul class="tags">
                    <li class="hastag">#<span class="sr-only">Tag</span>${this.photographers[0].tags}</li>                    
                </ul>`;

        parentElement.appendChild(childElement);
        console.log(childElement);
    }

}