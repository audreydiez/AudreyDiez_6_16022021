export class IndexBuilder {
  constructor(photographers) {
    this.photographers = photographers;

    this.init();
  }

  init() {
    if (document.getElementById("main-index") != null) {
      this.renderPhotographersList(this.photographers.photographers);
    }
  }

  renderPhotographersList(photographers) {
    //console.log(photographers)
    this.removePhotographersList();

    photographers.forEach((photographer) => {
      // Article creation
      let childElement = document.createElement("article");
      let parentElement = document.getElementById("main-index");

      childElement.classList.add("ph-cards__card");
      childElement.setAttribute("id", "ph-card");

      let tags = "";

      // Tags creation
      photographer.tags.forEach((tag) => {
        tags += `<li class="hashtag hashtag-photographer" state="unselected" value="${tag}">#<span class="sr-only" title="${tag}">Tag</span>${tag}</li>`;
      });

      // Fill the article
      childElement.innerHTML = `
                <a href="photographer.html?id=${photographer.id}" aria-label="Voir la page du photographe ${photographer.name}">
                    <figure class="profile">
                        <img src="assets/images/pictures/${photographer.portrait}" alt="Portrait de ${photographer.name}" class="profile__img">
                        <figcaption class="profile__name">
                            <h2>${photographer.name}</h2>
                        </figcaption>
                    </figure>
                </a>
                <p class="location">${photographer.city}, ${photographer.country}</p>
                <p class="quote">${photographer.tagline}</p>
                <p class="rate">${photographer.price}€/jour</p>
                <ul class="tags" id="tags">
                    ${tags}                    
                </ul>`;

      // Display article
      parentElement.appendChild(childElement);
    });
  }

  removePhotographersList() {
    let parentsElements = document.getElementsByTagName("article");
    //console.log(parentsElements);

    // Remove each node in reverse order
    for (let i = parentsElements.length - 1; i >= 0; --i) {
      parentsElements[i].remove();
    }
  }
}
