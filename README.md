# forem-client

Zero dependencies Forem API client : use your own request client (`axios`, `fetch` ...)

To use the Client, see the documentation of [https://developers.forem.com/api](https://developers.forem.com/api)

## API

Some routes are not not yet in the client.

## Example

Code example :

```js
import ForemClient from "forem-client"
import axios from "axios"; // import your own requester

const client = new ForemClient(axios); // your id is optional

const asyncMain = async () => {
    let req = await client.GET_getUserByUsername("n4n5"); // return user infos of n4n5
}
asyncMain();
```

## License

Licensed under the MIT License - [LICENSE](LICENSE)