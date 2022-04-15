export default class ForemClient {
    constructor(requester, endpoint) {
        this.requester = requester;
        this.API_ENDPOINT = endpoint || "https://dev.to/api"; // default
        this.API_KEY = "";
        this.user = {};
    }

    setAPIkey = (newAPIkey) => {
        this.API_KEY = newAPIkey;
    };
    setUser = (newUser, override = true) => {
        if (override) {
            this.user = newUser;
        } else {
            this.user = { ...this.user, newUser };
        }
    };
    getUser = () => {
        return this.user;
    };

    /**
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
        return await this.request("get", `/articles?${urlParams}`);
    };

    /**
        getUserByUsername
        @params username
    */
    GET_getUserByUsername = async (username = "") => {
        return await this.request("get", `/users/by_username?url=${username}`);
    };

    /**
        getUserById
        @params id
    */
    GET_getUserById = async (id = 0) => {
        return await this.request("get", `/users/${id}`);
    };

    /**
        Post an article
    */
    POST_articles = async (data = null) => {
        return await this.request("post", "/articles", data);
    };

    /**
        Update an article
    */
    PUT_articles = async (data = null) => {
        const urlParams = new URLSearchParams(options).toString();
        return await this.request("put", "/articles", data);
    };

    /**
        Update an article
        @params options: {
            page: 
            per_page: 
        }
    */
    GET_articlesMe = async (options) => {
        const urlParams = new URLSearchParams(options).toString();
        return await this.request("get", `/articles/me?${urlParams}`);
    };

    async request(method = "get", url = "", dataToSend = null) {
        const obj = {
            method: method,
        };
        if (this.API_KEY) {
            obj.headers = { "api-key": this.API_KEY };
        }
        if (dataToSend !== null) {
            obj.data = dataToSend;
        }
        const { data } = await this.requester(
            `${this.API_ENDPOINT}${url}`,
            obj
        ).catch(function (error) {
            throw error;
        });
        return data;
    }
}
