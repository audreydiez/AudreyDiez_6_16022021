import { Photographer} from "./photographer";

export class Photographers {

    constructor(data) {
        const photographers = [];

        data.photographers.forEach ( photographer => {
           photographers.push(new Photographer(
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

        console.log(photographers);
    }



}