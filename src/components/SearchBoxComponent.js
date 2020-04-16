import React from 'react';
import {Link} from "react-router-dom";
import '../components/SearchBoxComponent.css'
import {searchBooks} from "../services/BookService";
import t from 'typy';

import 'react-multi-carousel/lib/styles.css';
import BookCarousel from "./BookCarousel";
import SearchResultsComponent from "./SearchResultsComponent";

const DEFAULT_TITLE = "a";

export default class SearchBoxComponent extends React.Component {

    state = {
        books: [],
        title: ''
    }

    responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
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

    /*componentDidMount() {
        this.searchBooks(DEFAULT_TITLE)
    }*/


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
                            <Link to={'/search'}
                                  onClick={() => this.searchBooks(this.state.title)}
                                  className="search_icon"><i className="fas fa-search"></i></Link>
                        </div>
                    </div>
                </div>

                {this.props.searchMode && <div className="container">
                    <h2 className="carousel-style">Most Relevant Books</h2>
                    &nbsp;
                    <BookCarousel
                        title="g"
                        sorter="relevance"
                    />

                    <h2 className="carousel-style">Newest Books</h2>
                    &nbsp;
                    <BookCarousel
                        title="l"
                        sorter="newest"
                    />

                    <h2 className="carousel-style">Top Action Books</h2>
                    &nbsp;
                    <BookCarousel
                        title="action"
                        sorter="newest"
                    />


                </div>
                }

                {!this.props.searchMode &&
                <SearchResultsComponent
                    books={this.state.books}
                    title={this.state.title}

                />}

            </div>

        );
    }
}

