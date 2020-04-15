import React from 'react';
import {Link} from "react-router-dom";
import '../components/SearchBoxComponent.css'
import {searchBooks} from "../services/BookService";
import t from 'typy';

const DEFAULT_TITLE = "cricket";

export default class SearchBoxComponent extends React.Component {

    state = {
        books: [],
        title: ''
    }

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

                <div>
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
                                                                             className="card">
                                                                             {book.volumeInfo.imageLinks.thumbnail
                                                                              &&
                                                                              <img
                                                                                  className="card-img-top"
                                                                                  src={book.volumeInfo.imageLinks.thumbnail
                                                                              && book.volumeInfo.imageLinks.thumbnail}
                                                                                  alt="Card image cap"/>}
                                                                             <div
                                                                                 className="card-body">
                                                                                 <h6 className="card-title">

                                                                                     {book.volumeInfo.title}
                                                                                 </h6>
                                                                             </div>
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

