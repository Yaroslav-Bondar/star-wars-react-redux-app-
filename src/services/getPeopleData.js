import {HTTPS, 
        SWAPI_ROOT, 
        SWAPI_PEOPLE, 
        URL_IMG_PERSON, 
        GUIDE_IMG_EXTENSION,
        SWAPI_PARAM_PAGE} from '../constants/api';

export const getPeoplePageId = url => {
    const regularExp = new RegExp(`(?<=${SWAPI_PARAM_PAGE})\\d+`);
    const pageId = url.match(regularExp)[0];
    return Number(pageId);
} 
export function getId(url, category) {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, '').match(/\d+/)[0];
    return id;
    // return url.slice(url.length - 2, url.length - 1);

}
// export const getId = url => url.slice(url.length - 2, url.length - 1);
export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;