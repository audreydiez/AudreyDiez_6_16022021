import {VideoFactory} from "./video-factory";
import {ImageFactory} from "./image-factory";


export class MediaFactory {


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
        console.log("media factory")
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

    static sortMedias (medias, filter) {


        let sortingMedias = [];

        if (filter === "popularity"){

            sortingMedias = [...medias].sort( (a,b) => {
                return b.likes - a.likes;
            })


        }
        else if (filter === "date"){
            sortingMedias = [...medias].sort( (a,b) => {

                let dateA = new Date(a.date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));

                let dateB = new Date(b.date.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));

                return dateB - dateA;
            })


        }
        else if (filter === "title"){

            sortingMedias = [...medias].sort( (a,b) => a.name.localeCompare(b.name))


        }

        return sortingMedias;
    }



}



