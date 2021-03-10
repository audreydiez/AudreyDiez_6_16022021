

export class photographerBuilder{
    constructor(photographerDetail, photographerMedias) {
        this.photographerDetail = photographerDetail;
        this.photographerMedias = photographerMedias;

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
        let parentElement = document.getElementById("main-photographer-detail");
        let childElement = document.createElement("section");
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

        console.log(this.photographerMedias);
        // Bind to DOM
        let parentElement = document.getElementById("pictures");


        this.photographerMedias.forEach( media => {

            let childElement = document.createElement("article");
            childElement.classList.add("pictures__picture");
            childElement.setAttribute("aria-label", "Images et vidéos du photographe");

            childElement.innerHTML = `
              <figure class="photo">
                  <a href="assets/images/pictures/${media.image}">
                       <img src="assets/images/pictures/${media.image}" alt="${media.description}" class="photo__img">
                  </a>
                  <figcaption class="photo__details">
                       <h2 class="photo-title">${media.image}</h2>
                       <div class="price">${media.price} €</div>
                       <div class="likes">${media.likes} <3</div>
                  </figcaption>
              </figure>  
            `;

            parentElement.appendChild(childElement);
        })




    }
}