// Get all img via 'a'
const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
const img_box = document.getElementById("img-pushed");

export const backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");

const closeLightboxBtn = document.querySelector(".close-btn");

const previousBtn = document.getElementById("previous");
const nextBtn =document.getElementById("next");

export const lightboxContainer = document.getElementById("lightbox__container");

let currentIndex = 0;

export class Lightbox {

    static init (){

        new Lightbox();
    }

    /*
    * @param {string} url URL de l'image
    * */
    constructor() {

        let index = 0;
        links.forEach(link => {
            link.index = index;
            link.addEventListener('click', e => {
                e.preventDefault();
                currentIndex = e.currentTarget.index;
                Lightbox.changeImageURL(link.pathname)
                this.openLightbox();
                console.log(currentIndex);
                console.log("longueur:" + links.length);
            });
            index++;
        });

        // Add btn event for lightbox
        closeLightboxBtn.addEventListener('click',  Lightbox.closeLightbox);
        img_box.addEventListener('click', (e) => e.stopPropagation());
        lightboxContainer.addEventListener('click',  Lightbox.closeLightbox);
        previousBtn.addEventListener('click',  Lightbox.previousIMG);
        nextBtn.addEventListener('click',  Lightbox.nextIMG);
        // Bing key controls for accessibility
        this.bindKey();


    }
    /*
    * @param {string} url URL de l'image
    * @return {HTMLElement)
    * */
    static changeImageURL (url) {
        // change lightbox img in DOM
        img_box.src =url;
    }

    static changeImageIndex(direction) {
        // If index = 0, index reach links.length
        if(direction === "previous"){
            if(currentIndex === 0){
                currentIndex = links.length - 1;
                console.log(links.length + ", current : " + currentIndex);
            }
            else {
                currentIndex --;
                console.log(links.length + ", current : " + currentIndex);
            }
        }
        else if(direction === "next"){
            if(currentIndex === (links.length - 1)){
                currentIndex = 0;
                console.log(links.length + ", current : " + currentIndex);
            }
            else {
                currentIndex ++;
                console.log(links.length + ", current : " + currentIndex);
            }
        }
    }

    openLightbox (){
        backgroundMaskLightbox.style.display = "flex";
    }

    static closeLightbox (){
        backgroundMaskLightbox.style.display = "none";
    }

    bindKey (){
        window.addEventListener("keydown", function (event) {

            switch (event.key) {

                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    Lightbox.previousIMG();
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    Lightbox.nextIMG();
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                    Lightbox.closeLightbox();
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

        }, true);
    }


    static nextIMG (){
        Lightbox.changeImageIndex("next");
        // Get image URL via current index
        let urlByIndex = links[currentIndex].pathname;
        Lightbox.changeImageURL(urlByIndex);
    }

    static previousIMG (){
        Lightbox.changeImageIndex("previous");
        // Get image URL via current index
        let urlByIndex = links[currentIndex].pathname;
        Lightbox.changeImageURL(urlByIndex);
    }





}


