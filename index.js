export default class ForemClient {

    constructor(requester, endpoint) {
        this.requester = requester;
        this.API_ENDPOINT = endpoint || "https://dev.to/api"; // default
        this.API_KEY = "";
    }

    setAPIkey = (newAPIkey) => {
        this.API_KEY = newAPIkey;
    }
    /*
        @params options = {
            page,
            per_page,
            tag,
            tags,
            tags_exclude,
            username,
            state,
            top,
            collection_id
        }
    */
    GET_articles = async (options = null) => {
        const urlParams = new URLSearchParams(options).toString();
        return await this.request('get', `/articles?${urlParams}`);
    }

    /*
        Post an article
    */
    POST_articles = async (data = null) => {
        return await this.request('post', '/articles', data);
    }

    /*
        Update an article
    */
    PUT_articles = async (data = null) => {
        const urlParams = new URLSearchParams(options).toString();
        return await this.request('put', '/articles', data);
    }

    async request(method = 'get', url = "", dataToSend = null) {
        const obj = {
            method: method,
            headers: {
                "api-key": this.API_KEY
            }
        };
        if (dataToSend !== null) {
            obj.data = dataToSend;
        }
        const { data } = await this.requester(`${this.API_ENDPOINT}${url}`, obj).catch(function (error) {
            throw error;
        });
        return data;
    }
}