import {VideoFactory} from "./video-factory";
import {ImageFactory} from "./image-factory";
import {Photographer} from "./photographer";

export class MediaFactory {

    // retourne tableau de médias
    constructor(data) {


        this.medias = [];

        data.media.forEach ( media => {

            if (Object.keys(media)[2].toString() === "image"){

                this.medias.push(new ImageFactory(media));
            }
            else if (Object.keys(media)[2].toString() === "video") {
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

    RenameMedia (media) {

    }

}



