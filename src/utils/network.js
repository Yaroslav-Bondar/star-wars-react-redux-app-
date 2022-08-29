import {HTTP, HTTPS} from '../constants/api';

/**
 * changing HTTP on HTTPS in URL
 * @param {String} url - url to change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
}

/**
 * receiving data 
 * @param {String} url - url for request
 * @returns {Promise} - Promise with query result
 */
 export const getApiResource = async url => {
    try {
        // const data = await (await fetch(url)).json();
        const response = await fetch(url);
        if (!response.ok) {
            // console.log(response);
            throw new Error(`${response.statusText, response.status}`);
            //  + ' ' + `${response.status}` console.log('Error. Could not fetch: ',);
        }
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error) {
        // console.log('Could not fetch: ', error);
        // console.log(error);
        // console.log(error.message);
        return error;
        // return false;
    }
}

/**
 * receiving data 
 * @param {array} urls - urls for request
 * @returns {Promise} - Promise with query result
 */
export const makeConcurrentRequest = async urls => {
    const res = await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json());
    }));
    return res;
}
