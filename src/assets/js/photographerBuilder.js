

export class photographerBuilder{
    constructor(photographerDetail) {
        this.photographerDetail = photographerDetail;

        this.init();
    }

    init(){
        if (document.getElementById("main-photographer-detail") != null){

            this.renderPhotographer();
        }

    }

    renderPhotographer (){

        this.displayProfile();
        this.displayMedia();
    }

    displayProfile (){
        // Bind to DOM
        const parentElement = document.getElementById("main-photographer-detail");
        const childElement = document.createElement("section");
        childElement.classList.add("profile");
        childElement.setAttribute("aria-label", "photographers");

        // Tags creation
        let tags = '';
        this.photographerDetail.tags.forEach(tag => {
            tags += `<li class="hashtag">#${tag}</li>`;
        })

        childElement.innerHTML = `
            <h1 class="profil-title profil-title--small">${this.photographerDetail.name}</h1>
            <div class="profile__location">${this.photographerDetail.city}, ${this.photographerDetail.country}</div>
            <div class="profile__quote">${this.photographerDetail.tagline}</div>
            <ul class="profile__tags">
                ${tags} 
            </ul>
            <div class="profile__avatar">
                <figure class="avatar">
                    <img src="assets/images/pictures/${this.photographerDetail.portrait}" alt="avatar" class="avatar__img">
                </figure>
            </div>
            <a href="#" type="button" class="contactForm profile__contact btn"><span>Contactez-moi</span></a>
            `;

        parentElement.prepend(childElement);
    }

    displayMedia (){

    }
}