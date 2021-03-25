import { IndexBuilder } from "../classes_builders/indexBuilder";
import { photographerBuilder } from "../classes_builders/photographerBuilder";
import {Tags} from "../classes/tags";
import {CustomSelect} from "../classes/custom-select";

export class Router {

    constructor(photographers, medias, data) {
        this.photographers = photographers;
        this.medias = medias;
        this.data = data;
        this.routeListenner();

    }

    routeListenner (){

        if ("onhashchange" in window) {
            if (document.location.pathname === "/"){
                this.reachIndex();
            }
            else if (document.location.pathname === "/photographer.html"){
                this.reachPhotographers();


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


    }

}