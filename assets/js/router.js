import { IndexBuilder } from "./indexBuilder";
import { photographerBuilder } from "./photographerBuilder";
import {Tags} from "./tags";
import {CustomSelect} from "./custom-select";

export class Router {

    constructor(photographers, medias, data) {
        this.photographers = photographers;
        this.medias = medias;
        this.data = data;


        console.log("const router")

        if ("onhashchange" in window) {
            console.log("hash change")
            //if (document.location.pathname === "/"){
            if (document.location.pathname === "/AudreyDiez_6_16022021/"){
                    console.log("path /")
                    this.reachIndex();
                    //console.log(document.location.pathname )
                }

            //if (document.location.pathname === "/photographer.html"){
            if (document.location.pathname === "/AudreyDiez_6_16022021/photographer.html"){
                console.log("path /photographer")
                this.reachPhotographers();
                //console.log(document.location.pathname )
            }
        }

        else {
            console.log("path / default")
            this.reachIndex();
        }


    }


    reachPhotographers (){
        console.log("reachPhotographers")
        let id = document.location.search.replace("?id=","");


        let photographerDetail = this.photographers.getPhotographerById(id);
        let photographerMedias = this.medias.GetMediasByPhotographer(id);



        const photographerBuilderInstance = new photographerBuilder(photographerDetail[0], photographerMedias);
        new CustomSelect(photographerMedias, photographerBuilderInstance);




    }

    reachIndex (){
        console.log("reachIndex")
        const indexBuilderInstance = new IndexBuilder(this.photographers);
        new Tags(this.photographers, indexBuilderInstance);
        console.log("reach index done)")


    }

}