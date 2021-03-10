import {VideoFactory} from "./video-factory";
import {ImageFactory} from "./image-factory";
import {Photographer} from "./photographer";

export class MediaFactory {

    // retourne tableau de médias
    constructor(data) {


        this.medias = [];

        data.media.forEach ( media => {

            if (Object.keys(media)[2].toString() === "image"){

                media.name = this.renameMedia(media.image);
                media.url = media.image;
                this.medias.push(new ImageFactory(media));
            }
            else if (Object.keys(media)[2].toString() === "video") {

                media.name = this.renameMedia(media.video);
                media.url = media.video;
                this.medias.push(new VideoFactory(media));
            }

        });

    }

    GetMediasByPhotographer (id) {

        const mediaByPhotographer = [];

        this.medias.forEach( media => {
            if (media.photographerId.toString() === id) {
                mediaByPhotographer.push(media);
            }
        });

        return mediaByPhotographer;

    }

    renameMedia (media) {
        // Remove category
        media = media.substring(media.indexOf("_") + 1);
        // Remove format
        media = media.split('.')[0];
        // Remove all _
        media = media.replace(/_/g, " ");

        return media;

    }



}



