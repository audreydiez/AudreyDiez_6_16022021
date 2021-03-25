export class VideoFactory {

    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.name = media.name;
        this.url = media.video;
        this.type = "video";
        this.tags = media.tags;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.description = media.description;
        this.poster = this.setPosterToVideo(this.url);

    }

    setPosterToVideo (media){
        media = media.split('.').slice(0, -1).join('.')
        media += ".png";

        return media;
    }



}