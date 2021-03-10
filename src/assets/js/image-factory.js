export class ImageFactory {

    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.image = media.image;
        this.tags = media.tags;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.description = media.description;
    }

}