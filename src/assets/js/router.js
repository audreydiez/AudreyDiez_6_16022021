import { IndexBuilder } from "./indexBuilder";
import { photographerBuilder } from "./photographerBuilder";
import {Tags} from "./tags";

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
        //console.log(id);

        let photographerDetail = this.photographers.getPhotographerById(id);
        let photographerMedias = this.medias.GetMediasByPhotographer(id);

        new photographerBuilder(photographerDetail[0], photographerMedias);

    }

    reachIndex (){

        const indexBuilderInstance = new IndexBuilder(this.photographers);
        new Tags(this.photographers, indexBuilderInstance);
        Tags.test();

    }

}