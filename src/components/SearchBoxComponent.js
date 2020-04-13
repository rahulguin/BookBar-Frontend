import React from 'react';
import {Link} from "react-router-dom";
import '../components/SearchBoxComponent.css'
import {BACKEND_API} from "../common/constants";
import { Pagination } from '@material-ui/lab';
import BookBannerComponent from "./BookBannerComponent";


const DEFAULT_TITLE = "d";

export default class SearchBoxComponent extends React.Component {

    state = {
        books: [],
        title: ''
    }

    searchBooks = (title) => {
        fetch(`${BACKEND_API}/api/book/search?q=${title}`)
            .then(response => response.json())
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
                <div className="container h-100">
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
               {/* <div className="container">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search books"
                               value={this.state.title}
                               onChange={(e) => this.setState({
                                   title: e.target.value
                               })}/>
                        <button id="sub" className="btn btn-default"
                                onClick={() => this.searchBooks(this.state.title)}>Search
                        </button>

                    </div>
                </div>*/}
                <div>
                    <div id="searchResultsContainer" className="py-5 px-5 card-group">
                        <div className="container">
                            <ul className="list-group">
                                <div className="row">
                                    {
                                        this.state.books && this.state.books.map(book =>
                                            <div className="col-sm-4 col-md-2">
                                                <div className="card">
                                                    {book.image
                                                    &&
                                                    <img
                                                        className="card-img-top"
                                                        src={book.image
                                                        && book.image.smallThumbnail}
                                                        alt="Card image cap"/>}
                                                    <div className="card-body">
                                                        <h6 className="card-title">
                                                            <Link
                                                                to={`/bookDetails/${book._id}`}>
                                                                {book.title}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
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

