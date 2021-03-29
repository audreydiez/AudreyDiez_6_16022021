export class Lightbox {


    constructor() {

        this.links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]');
        this.img_pushed = document.getElementById("img-pushed");
        this.video_pushed = document.getElementById("video-pushed");
        this.video_tag = document.getElementById("video-tag");
        this.altText = document.getElementById("alt-text");

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
                this.changeImageURL(link.pathname, link.getAttribute("aria-label"))
                this.openLightbox();


            });
            index++;
        });

        // Add btn event for lightbox
        this.closeLightboxBtn.addEventListener('click',  this.closeLightbox);
        this.img_pushed.addEventListener('click', (e) => e.stopPropagation());
        this.lightboxContainer.addEventListener('click',  this.closeLightbox);
        this.previousBtn.addEventListener('click',  () => this.previousIMG());
        this.nextBtn.addEventListener('click',  () => this.nextIMG() );
        // Bing key controls for accessibility


        window.addEventListener("keydown", e => {

            switch (e.key) {

                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    this.previousIMG();
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    this.nextIMG();
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                    this.closeLightbox();
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

        });

        document.getElementById('closeLightbox').focus();
        // Keep focus in modal
        document.getElementById("lightboxTitle").addEventListener('keydown', (e) => {
            if (e.keyCode === 9 ) {
                document.getElementById('closeLightbox').focus();
            }
        });



    }

    changeImageURL (url, alt) {
        // change lightbox img in DOM

        if (url.split('.').pop().toString() === "mp4"){


            this.video_tag.style.display = "block";
            this.img_pushed.style.display = "none";

            this.video_pushed.setAttribute("src", url);
            this.video_pushed.setAttribute("alt", alt);
            this.altText.innerText = alt;
            this.video_tag.load();
            this.video_tag.play();

        }
        else if (url.split('.').pop().toString() === "jpg") {


            this.video_tag.style.display = "none";
            this.img_pushed.style.display = "block";
            this.img_pushed.alt = alt;
            this.altText.innerText = alt;

            this.img_pushed.src = url;

        }
    }



    openLightbox (){
        this.backgroundMaskLightbox.style.display = "flex";
        document.getElementById('closeLightbox').focus();

    }

    closeLightbox (){
        this.backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");
        this.backgroundMaskLightbox.style.display = "none";
            }




    nextIMG (){
        this.changeImageIndex("next");
        // Get image URL via current index
        let urlByIndex = this.links[this.currentIndex].pathname;
        let altText = this.links[this.currentIndex].getAttribute("aria-label");

        this.changeImageURL(urlByIndex, altText);
    }

    previousIMG (){
        this.changeImageIndex("previous");
        // Get image URL via current index
        let urlByIndex = this.links[this.currentIndex].pathname;
        let altText = this.links[this.currentIndex].getAttribute("aria-label");
        this.changeImageURL(urlByIndex, altText);
    }

    changeImageIndex(direction) {
        // If index = 0, index reach links.length
        if(direction === "previous"){
            if(this.currentIndex === 0){
                this.currentIndex = this.links.length - 1;

            }
            else {
                this.currentIndex --;

            }
        }
        else if(direction === "next"){
            if(this.currentIndex === (this.links.length - 1)){
                this.currentIndex = 0;

            }
            else {
                this.currentIndex ++;

            }
        }
    }



}


