

export class IndexBuilder{
    constructor(photographers) {
        this.photographers = photographers;

        this.init();
    }

    init(){
        if (document.getElementById("main-content") != null){
            this.renderPhotographersList();
        }

    }

    renderPhotographersList (){

        this.photographers.forEach(photographer => {

            // Article creation
            const childElement = document.createElement("article");
            const parentElement = document.getElementById("main-content");

            childElement.classList.add("ph-cards__card");
            childElement.setAttribute("id", "ph-card");

            let tags = '';

            // Tags creation
            photographer.tags.forEach(tag => {
                tags += `<li class="hashtag">#<span class="sr-only">Tag</span>${tag}</li>`;
            })

            // Fill the article
            childElement.innerHTML = `
                <a href="photographer.html?id=${photographer.id}" aria-label="Voir la page du photographe ${photographer.name}">
                    <figure class="profile">
                        <img src="assets/images/pictures/${photographer.portrait}" alt="Portrait de ${photographer.name}" class="profile__img">
                        <figcaption class="profile__name">
                            <h2>${photographer.name}</h2>
                        </figcaption>
                    </figure>
                </a>
                <p class="location">${photographer.city}, ${photographer.country}</p>
                <p class="quote">${photographer.tagline}</p>
                <p class="rate">${photographer.price}€/jour</p>
                <ul class="tags" id="tags">
                    ${tags}                    
                </ul>`;

            // Display article
            parentElement.appendChild(childElement);

        });

    }

}