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

         // For each photographer
         this.photographers.forEach( photographer => {


             // For each tag of each photographer
             photographer.tags.forEach(photographerTag => {


                 // For each tag selected by user
                 tags.forEach( tag => {

                     // Check if tag match with photographer tag
                     if (tag.toString().toLowerCase() === photographerTag.toString().toLowerCase()){

                         // Check if already pushed
                         if(photographersSelected.some(photographerS => photographerS.id === photographer.id)){
                             console.log("Object found inside the array." + photographer);

                         } else{

                             // Finally push in the array
                             photographersSelected.push(photographer);
                         }

                     }
                 })
             })


         })

         console.log(photographersSelected);

    }




}