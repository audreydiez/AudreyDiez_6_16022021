// Get all img via 'a'











export class Lightbox {

    /*
    * @param {string} url URL de l'image
    * */
    constructor() {

        this.links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
        this.img_box = document.getElementById("img-pushed");
        this.backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");
        this.closeLightboxBtn = document.querySelector(".close-btn");

        this.previousBtn = document.getElementById("previous");
        this.nextBtn =document.getElementById("next");

        this.lightboxContainer = document.getElementById("lightbox__container");

        this.currentIndex = 0;

        let index = 0;
        this.links.forEach(link => {
            link.index = index;
            link.addEventListener('click', e => {
                e.preventDefault();
                this.currentIndex = e.currentTarget.index;
                this.changeImageURL(link.pathname)
                this.openLightbox();
                console.log(this.currentIndex);
                console.log("longueur:" + this.links.length);
            });
            index++;
        });

        // Add btn event for lightbox
        this.closeLightboxBtn.addEventListener('click',  this.closeLightbox);
        this.img_box.addEventListener('click', (e) => e.stopPropagation());
        this.lightboxContainer.addEventListener('click',  this.closeLightbox);
        this.previousBtn.addEventListener('click',  () => this.previousIMG());
        this.nextBtn.addEventListener('click',  () => this.nextIMG() );
        // Bing key controls for accessibility
        this.bindKey();


    }
    /*
    * @param {string} url URL de l'image
    * @return {HTMLElement)
    * */
    changeImageURL (url) {
        // change lightbox img in DOM
        this.img_box.src =url;
    }



    openLightbox (){
        this.backgroundMaskLightbox.style.display = "flex";

    }

    closeLightbox (){
        this.backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");

        this.backgroundMaskLightbox.style.display = "none";
    }

    bindKey (){
        window.addEventListener("keydown", function (event) {

            switch (event.key) {

                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    previousIMG();
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    nextIMG();
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                    closeLightbox();
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

        }, true);
    }


    nextIMG (){
        this.changeImageIndex("next");
        // Get image URL via current index
        let urlByIndex = this.links[this.currentIndex].pathname;
        this.changeImageURL(urlByIndex);
    }

    previousIMG (){
        this.changeImageIndex("previous");
        // Get image URL via current index
        let urlByIndex = this.links[this.currentIndex].pathname;
        this.changeImageURL(urlByIndex);
    }

    changeImageIndex(direction) {
        // If index = 0, index reach links.length
        if(direction === "previous"){
            if(this.currentIndex === 0){
                this.currentIndex = this.links.length - 1;
                console.log(this.links.length + ", current : " + this.currentIndex);
            }
            else {
                this.currentIndex --;
                console.log(this.links.length + ", current : " + this.currentIndex);
            }
        }
        else if(direction === "next"){
            if(this.currentIndex === (this.links.length - 1)){
                this.currentIndex = 0;
                console.log(this.links.length + ", current : " + this.currentIndex);
            }
            else {
                this.currentIndex ++;
                console.log(this.links.length + ", current : " + this.currentIndex);
            }
        }
    }



}


