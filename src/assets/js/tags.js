
export class Tags {

    constructor() {

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


        this.init();

    }

    init () {


        const parentElement = document.getElementById("filters-list");

        this.tags.forEach(tag => {
            const childElement = document.createElement("li");
            childElement.classList.add("filters-list__filter", "hashtag");
            childElement.setAttribute("id", "tag");
            childElement.setAttribute("value", "unselected");
            childElement.innerText = "#" + tag;
            parentElement.appendChild(childElement);

            childElement.addEventListener("click", e =>{
                this.setComportment(childElement)
            })

        });




    }

    static test () {
        console.log("test");
    }

    setComportment (childElement) {
        console.log("lol")

        if (childElement.getAttribute("value") === "unselected") {
            childElement.setAttribute("value", "selected");
            childElement.classList.add("hashtag--selected");

        } else {
            if (childElement.getAttribute("value") === "selected") {
                childElement.setAttribute("value", "unselected");
                childElement.classList.remove("hashtag--selected");
            }
        }



    }
}