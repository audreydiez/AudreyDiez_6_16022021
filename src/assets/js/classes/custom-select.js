import { MediaFactory } from "../classes_builders/media-factory";

export class CustomSelect {
  constructor(photographerMedias, photographerBuilderInstance) {
    this.photographerMedias = photographerMedias;
    this.photographerBuilderInstance = photographerBuilderInstance;

    this.filtersWrapper = document.getElementById("select-wrapper");
    this.filterBtn = document.getElementById("button-select");
    this.filterList = document.getElementById("list");

    this.backgroundSelect = document.getElementById("focus-filters");

    this.options = Array.from(document.getElementsByClassName("option"));

    this.selected = null;

    // Hide list filters
    this.filterList.style.display = "none";

    this.filterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.expandList();
    });

    this.filtersWrapper.addEventListener("click", (e) => e.stopPropagation());
    this.backgroundSelect.addEventListener("click", this.closeList);

    this.options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.filterList.getAttribute("expanded") === "true") {
          this.closeList();
          this.selected = option.getAttribute("id");

          // Sorting
          this.sortedMedia = MediaFactory.sortMedias(
            this.photographerMedias,
            this.selected
          );

          // Display
          this.photographerBuilderInstance.displayMedia(this.sortedMedia);
          // Change select btn name
          if (this.selected === "date") {
            this.filterBtn.innerHTML = `   
                                                Date                                              
                                                <i class="fas fa-chevron-up"></i>
                                                `;
          }
          if (this.selected === "popularity") {
            this.filterBtn.innerHTML = `  
                                                   Popularité                                               
                                                <i class="fas fa-chevron-up"></i>
                                                `;
          }
          if (this.selected === "title") {
            this.filterBtn.innerHTML = ` 
                                                Titre                                                
                                                <i class="fas fa-chevron-up"></i>
                                                `;
          }
        }
        this.filterList.addEventListener("click", (e) => e.stopPropagation());
      });
    });

    return this.sortedMedia;
  }

  expandList() {
    if (this.filterList.getAttribute("expanded") === "false") {
      this.filterList.style.display = "flex";
      this.filterList.setAttribute("expanded", "true");
      this.backgroundSelect.style.display = "flex";
    }
  }

  closeList() {
    this.filterList.setAttribute("expanded", "false");
    this.filterList.style.display = "none";
    this.backgroundSelect.style.display = "none";
  }
}

// SELECT

//SELECT
