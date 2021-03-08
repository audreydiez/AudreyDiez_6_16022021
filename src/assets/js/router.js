import {Photographers} from "./photographers";
import { IndexBuilder } from "./indexBuilder";
import { photographerBuilder } from "./photographerBuilder";

export class Router {

    constructor(photographers) {
        this.photographers = photographers;
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

    }

    reachPhotographers (){

        let id = document.location.search.replace("?id=","");
        console.log(id);

        let photographerDetail = this.photographers.getPhotographerById(id);

        new photographerBuilder(photographerDetail[0]);

    }

    reachIndex (){

        new IndexBuilder(this.photographers);

    }

}