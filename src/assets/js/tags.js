
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
       // ≈


    }

    static test () {
        //console.log("test");
    }

    setComportment (childElement) {
        //console.log(childElement)
        //IndexBuilder.removePhotographersList();


        let tag = childElement.getAttribute("value");

        // If no tag selected, display all photographers
        if (this.selectedTags === this.tags){
            this.selectedTags = [];
        }

        // If tag unselected, select it and push in array
        if (childElement.getAttribute("state") === "unselected") {
            childElement.setAttribute("state", "selected");
            childElement.classList.add("hashtag--selected");


            let isAlreadyInArray = false;

            this.selectedTags.forEach(tag => {
                if (tag === childElement.getAttribute("value")){
                    //console.log(tag)
                    isAlreadyInArray = true;
                }
            })
           //console.log(isAlreadyInArray)

            if (!isAlreadyInArray) {
                this.selectedTags.push(childElement.getAttribute("value"))
                //console.log(tag)
            }

            //console.log(this.selectedTags)
            //console.log(childElement)
        }
        // If selected, unselect it and remove from array
        else if (childElement.getAttribute("state") === "selected") {

                childElement.setAttribute("state", "unselected");
                childElement.classList.remove("hashtag--selected");

                // Remove from array
                let value = this.selectedTags.indexOf(childElement.getAttribute("value"));
                this.selectedTags.splice(value,1);
                //console.log(this.selectedTags)


        }

        if (this.selectedTags.length < 1) {
            this.selectedTags = this.tags;
            //console.log(this.selectedTags)
        }

        // Get photographers with this tag
        let photographersSelected = this.photographersInstance.getPhotographersByTags(this.selectedTags);
        photographersSelected = Array.from(photographersSelected)
        //console.log(photographersSelected);

        this.indexBuilderInstance.renderPhotographersList(photographersSelected);



        // TRI EFFECTUé, on assigne les tags
        //console.log(this.selectedTags)
        //console.log(photographersSelected)

        // Rechercher dans les photographes tous les tags
        let tagsTop = document.getElementsByClassName("tags-top");
        let tagsPhotographers = document.getElementsByClassName("hashtag-photographer");
        //console.log(tagsTop)
        //console.log(tagsPhotographers)

        // On sélectionne les tags au top
        Array.from(tagsTop).forEach(tag =>{
            //console.log(tag.getAttribute("id"))
            this.selectedTags.forEach(tagS => {
                //console.log(tag);
                //console.log(tagS);

                // on deselectionne tout et on selectionne les tags de la liste
                tag.classList.remove("hashtag--selected")
                tag.setAttribute("state", "unselected");


                // Si tag = tagS et que tous les tags ne sont pas selectionnés
                if (tag.getAttribute("value").toString() === tagS.toString() && this.selectedTags !== this.tags) {

                    //console.log(tagS)
                    //console.log(childElement)
                    //console.log(tag)

                    // on reselectionne les bons de la list
                    // tag.classList.add("hashtag--selected")
                    // tag.setAttribute("state", "selected");


                    //console.log(tag.getAttribute("id").toString())

                    /*if (tag.getAttribute("state").toString() === "selected"){
                       // console.log("deja")
                    }*/
                    //detaguer tag haut
                }




            })
        })

        // on sélectionne les tags photographers
        Array.from(tagsPhotographers).forEach(tag =>{
            this.selectedTags.forEach(tagS => {

                if (tag.getAttribute("value").toString() === tagS.toString() && this.selectedTags !== this.tags) {
                    tag.classList.add("hashtag--selected")
                    tag.setAttribute("state", "selected");
                    //console.log(tag)
                }
            })
        })

        console.log(this.selectedTags);

        // Selectionner les tags qui sont dans le tableau
        // selectionner les tags qui sont en haut


        // Bind de nouveau les tags des photographes

        this.deselectTags()
        this.selectTags()


        //let test = document.querySelector(`[value="${tag}"]`);
        //test.classList.add("hashtag--selected");
        //console.log(tag);
        //console.log(test);
        this.setPhotographerTagsComportment()


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
                      console.log(tagtop.getAttribute("value").toString())
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

/*
if (tag.classList.contains("hashtag--selected")){
    tag.classList.remove("hashtag--selected")
    tag.setAttribute("state", "unselected");
}
else {
    tag.classList.add("hashtag--selected")
    tag.setAttribute("state", "selected");
}*/
