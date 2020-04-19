import {BACKEND_API} from "../common/constants";



export const addToOrder = async(item, user) => {
    let results = await(await fetch(`${BACKEND_API}/api/order/addToOrder/${user}`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            'content-type': 'application/json'
        }
    })).json();

    return results;
}


export const getAllOrdersForUser = (user) => {
    return fetch(`${BACKEND_API}/api/order/allOrders/${user}`)
        .then(response => response.json())
}
