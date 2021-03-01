// Get all img via 'a'
const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');


export class Lightbox {

    static init (){

        // Create lightbox with each link
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(link.pathname);
            });

        });

    }

    /*
    * @param {string} url URL de l'image
    * */
    constructor(url) {
        // Build lightbox dom element
        const domElement = this.addDOMElement(url);
        const lightboxContainer = document.getElementById("lightbox__container");
        // Inject Lightbox in DOM element

        lightboxContainer.appendChild(domElement);
    }

    /*
    * @param {string} url URL de l'image
    * @return {HTMLElement)
    * */
    addDOMElement (url) {
        // create lightbox element and return it
        const img_box = document.createElement('img');
        img_box.classList.add('img-pushed');
        img_box.src =url;
        return img_box;
    }




}


