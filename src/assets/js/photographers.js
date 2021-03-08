import { Photographer} from "./photographer";
import { IndexBuilder } from "./indexBuilder";

export class Photographers {

    constructor(data) {
        this.photographers = [];

        // Create a photographer object for each photographer and push them in array
        data.photographers.forEach ( photographer => {
           this.photographers.push(new Photographer(
               photographer.id,
               photographer.name,
               photographer.city,
               photographer.country,
               photographer.tags,
               photographer.tagline,
               photographer.price,
               photographer.portrait
           ));
        });

        //this.init(this.photographers);
        //console.log(this.photographers);
    }

    init(photographers) {
        // Build index with photographers
        //new IndexBuilder(photographers);

    }

    getPhotographerById (id){
        const photographerDetail = [];

        this.photographers.forEach( photographer => {
           if (photographer.id.toString() === id) {
               photographerDetail.push(photographer);
           }
        });

        return photographerDetail;
    }

}