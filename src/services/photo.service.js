import axios from 'axios'
const API_URL = 'https://api.unsplash.com/search/photos?page=1&query=Africa';
const AUTHORIZATION = {Authorization: 'Client-ID V4YYrdbekd79P8Fl1qKBitk00nVHQtwd_VM09ufQ41g'}

class PhotoService {
    listPhotos(){
        var config = {
            method: 'get',
            url: API_URL,
            headers: AUTHORIZATION
        };
        return axios(config)
    }

    searchPhoto(query){
        var config = {
            method: 'get',
            url: API_URL + ` ${query}`,
            headers: AUTHORIZATION
        };
        return axios(config)
    }
}

export default new PhotoService();