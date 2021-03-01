// Get all img via 'a'
const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
const img_box = document.getElementById("img-pushed");
const backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");

const closeLightboxBtn = document.querySelector(".close-btn");



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
                this.changeImageURL(link.pathname)
                this.openLightbox();
                console.log(currentIndex);
                //console.log(links);
            });
            index++;
        });

        closeLightboxBtn.addEventListener('click',  Lightbox.closeLightbox);

        this.bindKey();

    }
    /*
    * @param {string} url URL de l'image
    * @return {HTMLElement)
    * */
    changeImageURL (url) {
        // change lightbox img in DOM
        img_box.src =url;
    }

    openLightbox (){
        backgroundMaskLightbox.style.display = "flex";
    }

    static closeLightbox (){
        backgroundMaskLightbox.style.display = "none";
    }

    bindKey (){

        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            switch (event.key) {

                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    console.log("left");
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    console.log("right");
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                    Lightbox.closeLightbox();
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }, true);

    }

    // nextIMG (currentIndex){
    //     console.log(currentIndex);
    // }
    //
    // previousIMG (currentIndex){
    //     console.log(currentIndex);
    // }





}


