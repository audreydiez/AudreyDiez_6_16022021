import {Lightbox} from "./lightbox";


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
            `;

        parentElement.prepend(childElement);


    }

    displayMedia (){

        //console.log(this.photographerMedias);
        // Bind to DOM
        let parentElement = document.getElementById("pictures");

        // image / video thumbnail
        let thumbnail = '';



        this.photographerMedias.forEach( media => {

            if (media.type === "video"){
                thumbnail = `<img src="assets/images/pictures/${media.poster}" alt="${media.description}" class="photo__img">`;
            }
            else {
                thumbnail = `<img src="assets/images/pictures/${media.url}" alt="${media.description}" class="photo__img">`;
            }

            let childElement = document.createElement("article");
            childElement.classList.add("pictures__picture");
            childElement.setAttribute("aria-label", "Images et vidéos du photographe");

            childElement.innerHTML = `
              <figure class="photo">
                  <a href="assets/images/pictures/${media.url}">
                       ${thumbnail}
                  </a>
                  <figcaption class="photo__details">
                       <h2 class="photo-title">${media.name}</h2>
                       <div class="price">${media.price} €</div>
                       <div class="likes">${media.likes} <i class="fas fa-heart"></i></div>
                  </figcaption>
              </figure>  
            `;

            parentElement.appendChild(childElement);
        })

        new Lightbox();


    }
}