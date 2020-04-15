import React from 'react';
import {Link} from "react-router-dom";
import '../components/SearchBoxComponent.css'
import {searchBooks} from "../services/BookService";
import t from 'typy';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCarousel from "./BookCarousel";

const DEFAULT_TITLE = "a";

export default class SearchBoxComponent extends React.Component {

    state = {
        books: [],
        title: ''
    }

    responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    searchBooks = (title) => {
        searchBooks(title)
            .then(results => this.setState({
                books: results,
                title: ''
            }))

    }

    componentDidMount() {
        this.searchBooks(DEFAULT_TITLE)
    }


    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbotron-color">
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>

                        <h1 className="text-center h1-color">Shop online with Bookbar,</h1>
                        <h1 className="text-center h1-color">our Web Development final project!</h1>
                    </div>
                    &nbsp;
                    &nbsp;
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input"
                                   type="text"
                                   placeholder="Search books"
                                   value={this.state.title}
                                   onChange={(e) => this.setState({
                                       title: e.target.value
                                   })}/>
                            <Link to={'/'}
                                  onClick={() => this.searchBooks(this.state.title)}
                                  className="search_icon"><i className="fas fa-search"></i></Link>
                        </div>
                    </div>
                </div>

                <BookCarousel
                books={this.state.books}/>


                <div className="search-results-color">
                    <div id="searchResultsContainer" className="py-5 px-5 card-group">
                        <div className="container">
                            <ul className="list-group">
                                <div className="row">
                                    {
                                        this.state.books &&
                                        this.state.books.map(book =>
                                            <div
                                                className="col-sm-4 col-md-2">
                                                <Link
                                                    to={`/bookDetails/${t(
                                                        book,
                                                        'volumeInfo.industryIdentifiers[0].identifier').safeObject}`}>
                                                    <div
                                                        className="card card-fixed-size">
                                                        {book.volumeInfo.imageLinks.smallThumbnail
                                                        &&
                                                        <img
                                                            className="card-img-top"
                                                            src={book.volumeInfo.imageLinks.smallThumbnail}
                                                            alt="Card image cap"/>}
                                                    </div>
                                                    <div
                                                        className="card-body">
                                                        <a className="search-title card-title">

                                                            {book.volumeInfo.title}
                                                        </a>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

