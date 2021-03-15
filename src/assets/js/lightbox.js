// Get all img via 'a'



export class Lightbox {

    /*
    * @param {string} url URL de l'image
    * */
    constructor() {

        this.links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]');
        this.img_pushed = document.getElementById("img-pushed");
        this.video_pushed = document.getElementById("video-pushed");
        this.video_tag = document.getElementById("video-tag");

        this.backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");
        this.closeLightboxBtn = document.querySelector(".close-btn");

        this.previousBtn = document.getElementById("previous");
        this.nextBtn =document.getElementById("next");

        this.lightboxContainer = document.getElementById("lightbox__container");

        this.currentIndex = 0;


        let index = 0;
        this.links.forEach(link => {
            //console.log(link.pathname)
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



    }
    /*
    * @param {string} url URL de l'image
    * @return {HTMLElement)
    * */
    changeImageURL (url) {
        // change lightbox img in DOM

        if (url.split('.').pop().toString() === "mp4"){
            //this.img_box.style.display = "none";
            //console.log(url);

            this.video_tag.style.display = "block";
            this.img_pushed.style.display = "none";
            //console.log(url.split('.').pop().toString())
            this.video_pushed.setAttribute("src", url);
            this.video_tag.load();
            this.video_tag.play();
            //console.log(this.video_pushed.src);
        }
        else if (url.split('.').pop().toString() === "jpg") {
            //console.log(url.split('.').pop().toString())

            this.video_tag.style.display = "none";
            this.img_pushed.style.display = "block";

            this.img_pushed.src = url;

        }
    }



    openLightbox (){
        this.backgroundMaskLightbox.style.display = "flex";

    }

    closeLightbox (){
        this.backgroundMaskLightbox = document.getElementById("backgroundMaskLightbox");

        this.backgroundMaskLightbox.style.display = "none";
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


