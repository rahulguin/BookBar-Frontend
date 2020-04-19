
import {BACKEND_API} from "../common/constants";



export const addToWishList = async(item, user) => {
    let results = await(await fetch(`${BACKEND_API}/api/wish/addToWish/${user}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
            'content-type': 'application/json'
        }
    })).json();

    return results;
}

