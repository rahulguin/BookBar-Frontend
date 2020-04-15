import * as React from "react";
import './OrderComponent.css';
import {getAllBooks, searchBooksByISBN} from "../../services/BookService";
import {logout} from "../../actions/session";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const mapStateToProps = ({session}) => ({
    session
});

class OrderComponent extends React.Component {

    state = {
        books: [],
        currentBook: {}
    }

    componentDidMount = () => {
        let allBooks = getAllBooks()
            .then(books => this.setState(({
                books:books
            })))
    }

    findBookDetailsByISBN = (isbn) => {
        searchBooksByISBN(isbn)
            .then(book => this.setState(({
                currentBook:book
            })))
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                {this.props.session.userType == 'BUYER' &&
                    <div>

                    </div>
                }

                {this.props.session.userType == 'SELLER' &&
                    <div>
                        {this.state.books && this.state.books.map(book =>
                            book.seller == this.props.session.username ?
                                <div>
                                    {this.findBookDetailsByISBN(book.isbn.identifier)}
                                    <div className="">
                                        <div id="searchResultsContainer" className="py-5 px-5 card-group">
                                            <div className="container">
                                                <ul className="list-group">
                                                    <div className="row">
                                                        <div
                                                            className="card card-fixed-size">
                                                            {this.state.currentBook.volumeInfo && this.state.currentBook.volumeInfo.imageLinks.smallThumbnail
                                                            &&
                                                            <img
                                                                className="card-img-top"
                                                                src={this.state.currentBook.volumeInfo.imageLinks.smallThumbnail}
                                                                alt="Card image cap"/>}
                                                        </div>

                                                        {book.isbn.type}: {book.isbn.identifier}
                                                        <br/>
                                                        Title: <span>{this.state.currentBook.volumeInfo && this.state.currentBook.volumeInfo.title}</span>
                                                        <br/>
                                                        Quantity: {book.quantity}
                                                        <br/>
                                                        Price: {book.price.currency} {book.price.amount}
                                                        <br/>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <div></div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)
(withRouter(OrderComponent))
