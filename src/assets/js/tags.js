import {Photographers} from "./photographers";

export class Tags {

    constructor(photographersInstance) {

        this.photographersInstance = photographersInstance;

        this.tags = [
            "Portrait",
            "Art",
            "Fashion",
            "Architecture",
            "Travel",
            "Sport",
            "Animals",
            "Events"
            ];

        this.selectedTags = [];

        this.init();

    }

    init () {


        const parentElement = document.getElementById("filters-list");

        this.tags.forEach(tag => {
            const childElement = document.createElement("li");
            childElement.classList.add("filters-list__filter", "hashtag");
            childElement.setAttribute("id", tag);
            childElement.setAttribute("value", "unselected");
            childElement.innerText = "#" + tag;
            parentElement.appendChild(childElement);

            childElement.addEventListener("click", e =>{
                this.setStyleComportment(childElement)
            })

        });




    }

    static test () {
        console.log("test");
    }

    setStyleComportment (childElement) {

        if (childElement.getAttribute("value") === "unselected") {
            childElement.setAttribute("value", "selected");
            childElement.classList.add("hashtag--selected");
            this.selectedTags.push(childElement.id)

            // Display photographers with this tag
            //console.log(this.selectedTags)
            this.photographersInstance.getPhotographersByTags(this.selectedTags);

            //console.log(this.selectedTags)

        } else if (childElement.getAttribute("value") === "selected") {

                childElement.setAttribute("value", "unselected");
                childElement.classList.remove("hashtag--selected");

                // Remove from array
                let id = this.selectedTags.indexOf(childElement.id);
                this.selectedTags.splice(id,1);
                console.log(this.selectedTags)

        }



    }
}