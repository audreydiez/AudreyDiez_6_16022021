import { DataApi } from "./assets/js/data-api";
import { Photographers} from "./assets/js/photographers";
import { Router} from "./assets/js/router";
import {MediaFactory} from "./assets/js/media-factory";
import {setModalForm} from "./index";




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
        //console.log(this.photographers);

    }

}
