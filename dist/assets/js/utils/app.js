import { DataApi } from "../../../data-api";
import { Photographers} from "../classes/photographers";
import { Router} from "./router";
import {MediaFactory} from "../classes_builders/media-factory";
import {setModalForm} from "../../../index";




export class App {
    constructor() {




        // Fetch Json
        const dataApi = new DataApi();

        dataApi.getData()
            .then(data => {
                this.photographers = new Photographers(data);
                this.medias = new MediaFactory(data);
            })
            .then( () => {
                this.init();
            })
            .catch(err => {
                console.log(err);
            });
    }



    init () {
        new Router(this.photographers, this.medias);
        setModalForm();

    }

}
