import {BACKEND_API} from "../common/constants";

export const searchBooks = (title) => {
    fetch(`${BACKEND_API}/api/book/search?q=${title}`)
        .then(response => response.json())
}
