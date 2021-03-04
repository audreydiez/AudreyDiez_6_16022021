import { DataApi } from "./assets/js/data-api";
import { Photographers} from "./assets/js/photographers";


// 1 promise
/*json.getData()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    });*/

// 2 async/await
/*async function getDataFromJSON() {
    const data = await json.getData();
    console.log(data);
    //
}*/


export class App {
    constructor(JSON_url) {

        // Fetch Json
        const dataApi = new DataApi(JSON_url);

        dataApi.getData()
            .then(data => {
                this.photographers = new Photographers(data);
            })
            .catch(err => {
                console.log(err);
            })


        //console.log(this.photographers);

    }

    /*async getDataFromJSON() {
        const data = await this.dataApi.getData();
        console.log(data.photographers);
    }*/





}
