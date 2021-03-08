
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

            //console.log(document.location);
        }

    }

    reachPhotographers (){
        let id = document.location.search.replace("?id=","");
        console.log(id);
        // getPhotographerById(id)
        console.log("detail");
    }

    reachIndex (){
        console.log("home");
    }

}