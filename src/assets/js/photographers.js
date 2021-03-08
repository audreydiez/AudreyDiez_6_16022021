import { Photographer} from "./photographer";
import { IndexBuilder } from "./indexBuilder";

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

        this.init(photographers);
    }

    init(photographers) {
        // Build index with photographers
        new IndexBuilder(photographers);
    }

}