import React from "react";
import {Link} from "react-router-dom";
import t from "typy";
import './SearchResultsComponent.css'

export default class SearchResultsComponent extends React.Component {


    render() {
        return(
            <div className="search-results-color">
                &nbsp;
                <h1 className="carousel-style search-heading">Search Results:</h1>
                <div id="searchResultsContainer" className="py-5 px-5 card-group">
                    <div className="container">
                        <ul className="list-group">
                            <div className="row">
                                {
                                    this.props.books &&
                                    this.props.books.map(book =>
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
        )
    }
}
