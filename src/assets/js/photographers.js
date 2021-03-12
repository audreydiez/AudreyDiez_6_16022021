import { Photographer} from "./photographer";

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



    getPhotographerById (id){
        const photographerDetail = [];

        this.photographers.forEach( photographer => {
           if (photographer.id.toString() === id) {
               photographerDetail.push(photographer);
           }
        });

        return photographerDetail;
    }

     getPhotographersByTags ( tags){


         const photographersSelected = [];

         this.photographers.forEach( photographer => {
             //console.log(photographer.tags)
             photographer.tags.forEach(photographerTag => {
                 //console.log(photographerTag)
                 tags.forEach( tag => {

                     if (tag.toString().toLowerCase() === photographerTag.toString().toLowerCase()){
                         //console.log(photographer)
                         photographersSelected.push(photographer);
                         //console.log(photographersSelected);
                     }
                 })
             })


         })


        //  this.photographers.forEach( photographer => {
        //      console.log(photographer)
        //     photographer.tags.forEach( photographerTag => {
        //         tags.forEach (tag => {
        //             if (tag === photographerTag.toString()){
        //                 photographersSelected.push(photographer);
        //                 console.log(photographersSelected);
        //             }
        //         })
        //     })
        // })



    }



}