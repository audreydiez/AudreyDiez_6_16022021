import { IndexBuilder } from "./indexBuilder";
import { photographerBuilder } from "./photographerBuilder";
import {Tags} from "./tags";
import {CustomSelect} from "./custom-select";

export class Router {

    constructor(photographers, medias, data) {
        this.photographers = photographers;
        this.medias = medias;
        this.data = data;

        this.router();

    }

    router (){


        if ("onhashchange" in window) {
            if (document.location.pathname === "/"){
                this.reachIndex();
                console.log(document.location.pathname )
            }
            if (document.location.pathname === "/photographer.html"){

                this.reachPhotographers();
                console.log(document.location.pathname )
            }
        }

        else {
            this.reachIndex();
        }

    }

    reachPhotographers (){

        let id = document.location.search.replace("?id=","");


        let photographerDetail = this.photographers.getPhotographerById(id);
        let photographerMedias = this.medias.GetMediasByPhotographer(id);



        const photographerBuilderInstance = new photographerBuilder(photographerDetail[0], photographerMedias);
        new CustomSelect(photographerMedias, photographerBuilderInstance);




    }

    reachIndex (){

        const indexBuilderInstance = new IndexBuilder(this.photographers);
        new Tags(this.photographers, indexBuilderInstance);
        console.log("reach index)")


    }

}