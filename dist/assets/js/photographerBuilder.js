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
        this.displayMedia(this.photographerMedias);

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

    displayMedia (medias){

        this.removePicturesList();


        // Bind to DOM
        let parentElement = document.getElementById("pictures");

        // image / video thumbnail
        let thumbnail = '';

        // Total of likes
        let likesTotalCount = 0;

        medias.forEach( media => {


            likesTotalCount += media.likes;

            if (media.type === "video"){
                thumbnail = `<img src="assets/images/pictures/${media.poster}" alt="${media.description}" class="photo__img">`;

            }
            else {
                thumbnail = `<img src="assets/images/pictures/${media.url}" alt="${media.description}" class="photo__img">`;
            }

            let childElement = document.createElement("article");
            childElement.classList.add("pictures__picture");

            childElement.innerHTML = `
              <figure class="photo">
                  <a href="assets/images/pictures/${media.url}" type="${media.type}" aria-describedby="${media.description}">
                       ${thumbnail}
                  </a>
                  <figcaption class="photo__details">
                       <h2 class="photo-title">${media.name}</h2>
                       <p class="price">${media.price}€</p>
                       <a href="#" class="likes likesBlock" aria-label="likes for this picture"><span class="likes">${media.likes} </span><em class="fas fa-heart"></em></a>
                  </figcaption>
              </figure>  
            `;

            parentElement.appendChild(childElement);

        })

        // Lightbox creation
        new Lightbox();
        // Likes counter
        this.setComportmentLikesCounter();
        this.setTotalLikescounter(likesTotalCount);
    }

    setComportmentLikesCounter (){

        let likesBlock = document.getElementsByClassName("likesBlock");
        likesBlock= Array.from(likesBlock);


        likesBlock.forEach(likeBlock => {

            likeBlock.addEventListener("click", e =>{
                e.preventDefault()
                let like = likeBlock.getElementsByClassName("likes");
                like= Array.from(like);


                like[0].innerHTML = (parseInt(like[0].innerHTML) + 1).toString();

            })
        })


    }

    removePicturesList (){

        let parentsElements = document.getElementsByTagName("article");


        // Remove each node in reverse order
        for (let i = parentsElements.length - 1; i >= 0; --i) {
            parentsElements[i].remove();
        }

    }

    setTotalLikescounter(likesTotal){
        let tag = document.getElementById("day-rate__likes");
        tag.innerHTML = likesTotal + ` <em class="fas fa-heart"></em>`
    }

}