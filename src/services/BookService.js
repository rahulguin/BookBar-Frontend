import {BACKEND_API} from "../common/constants";

export const searchBooks = async(title) => {
    let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&orderBy=newest`)
        .then(response =>
            response.json().then(res => res.items));
    // console.log("this is first results " + results[0].volumeInfo)
    results = results.filter(book => book.volumeInfo.hasOwnProperty('imageLinks'))


    return results
}

export const searchBooksByISBN = async(isbnNumber) => {
    let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
        .then(response => response.json())
        .then(res => res.items);
    console.log(results[0])
    return results[0];
}
