
export class Tags {

    constructor(photographersInstance, indexBuilderInstance) {

        this.photographersInstance = photographersInstance;
        this.indexBuilderInstance = indexBuilderInstance;

        this.tags = [
            "portrait",
            "art",
            "fashion",
            "architecture",
            "travel",
            "sport",
            "animals",
            "events"
            ];

        this.selectedTags = this.tags;

        this.init();

    }

    init () {


        const parentElement = document.getElementById("filters-list");

        // Set tags in header
        this.tags.forEach(tag => {
            const childElement = document.createElement("li");
            childElement.classList.add("filters-list__filter", "hashtag", "tags-top");
            childElement.setAttribute("id", tag);
            childElement.setAttribute("title", tag);
            childElement.setAttribute("state", "unselected");
            childElement.setAttribute("value", tag);

            childElement.innerHTML =`
                                    <a href="#" title="${tag}">#${tag}</a>
            `;
            parentElement.appendChild(childElement);

            childElement.addEventListener("click", e =>{
                e.preventDefault()
                this.setComportment(childElement)

            })

        });

        // Set tags in each photographer card
        this.setPhotographerTagsComportment();



    }



    setComportment (childElement) {

        // If no tag selected, display all photographers
        if (this.selectedTags === this.tags){
            this.selectedTags = [];
        }

        // If tag unselected, select it and push in array
        if (childElement.getAttribute("state") === "unselected") {
            childElement.setAttribute("state", "selected");
            childElement.classList.add("hashtag--selected");


            let isAlreadyInArray = false;

            // Push photographer tag in selectecTags Array
            this.selectedTags.forEach(tag => {
                if (tag === childElement.getAttribute("value")){
                    isAlreadyInArray = true;
                }
            })

            if (!isAlreadyInArray) {
                this.selectedTags.push(childElement.getAttribute("value"))
            }

        }
        // If selected, unselect it and remove from array
        else if (childElement.getAttribute("state") === "selected") {

                childElement.setAttribute("state", "unselected");
                childElement.classList.remove("hashtag--selected");

                // Remove from array
                let value = this.selectedTags.indexOf(childElement.getAttribute("value"));
                this.selectedTags.splice(value,1);
        }

        // If no selected, select all tags for search
        if (this.selectedTags.length < 1) {
            this.selectedTags = this.tags;
        }

        // Get photographers with this tag
        let photographersSelected = this.photographersInstance.getPhotographersByTags(this.selectedTags);
        photographersSelected = Array.from(photographersSelected)


        this.indexBuilderInstance.renderPhotographersList(photographersSelected);


        this.selectTagsPhotographers()
        this.deselectTags()
        this.selectTags()
        this.setPhotographerTagsComportment()


    }
    selectTagsPhotographers(){
        let tagsPhotographers = document.getElementsByClassName("hashtag-photographer");

        Array.from(tagsPhotographers).forEach(tag =>{
            this.selectedTags.forEach(tagS => {

                if (tag.getAttribute("value").toString() === tagS.toString() && this.selectedTags !== this.tags) {
                    tag.classList.add("hashtag--selected")
                    tag.setAttribute("state", "selected");
                    //console.log(tag)
                }
            })
        })
    }

    deselectTags(){
        let tagsTop = document.getElementsByClassName("tags-top");
        Array.from(tagsTop).forEach(tagtop => {
            tagtop.classList.remove("hashtag--selected")
            tagtop.setAttribute("state", "unselected");
        })
    }

    selectTags() {
        let tagsTop = document.getElementsByClassName("tags-top");
        this.selectedTags.forEach(tagS => {
            Array.from(tagsTop).forEach(tagtop =>{
                  if (tagS === tagtop.getAttribute("value").toString() && this.selectedTags !== this.tags){
                      tagtop.classList.add("hashtag--selected")
                      tagtop.setAttribute("state", "selected");
                      //console.log(tagtop.getAttribute("value").toString())
                  }
            })
            }
        )
    }

    setPhotographerTagsComportment(){
        let photographerTags = document.getElementsByClassName("hashtag-photographer");

        photographerTags = Array.from(photographerTags)

        photographerTags.forEach(el => {

            el.addEventListener("click", e => {
                e.preventDefault();
                this.setComportment(el);

            })

        })
    }

}


