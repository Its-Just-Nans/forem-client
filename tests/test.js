import ForemClient from "forem-client";
import axios from "axios"; // import your own requester

const client = new ForemClient(axios); // your id is optional

const asyncMain = async () => {
    let data;
    data = await client.GET_getUserByUsername("n4n5"); // return user infos of n4n5
    console.log(JSON.stringify(data, null, 4));
};
asyncMain();
