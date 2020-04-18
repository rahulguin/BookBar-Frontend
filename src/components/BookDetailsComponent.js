import React from "react";
import './BookDetailsComponent.css';
import {BACKEND_API} from "../common/constants";
import Button from '@material-ui/core/Button';
import {searchBooksByISBN, sellBook, findBookById} from "../services/BookService";
import {logout} from "../actions/session";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import t from 'typy';

const mapStateToProps = ({session}) => ({
    session
});

class BookDetails extends React.Component {

    state = {
        book: {},
        bookAlreadyListed: false,
        sellAmount: 0,
        quantity: 0
    }

    componentDidMount = () => {
        searchBooksByISBN(this.props.isbn)
            .then(book => this.setState(({
                book:book
            })))
        console.log(this.state.book);
        this.findIfBookAlreadyListedForSelling();
        console.log(this.state.bookAlreadyListed)
    }

    findIfBookAlreadyListedForSelling = () => {
        findBookById(this.props.isbn)
            .then(book => {
                if(book[0]){
                    this.setState(({
                        bookAlreadyListed:true
                    }))
                }
                else{
                    this.setState(({
                        bookAlreadyListed:false
                    }))
                }
            })
    }

    addBookForSell = async (sellAmount, currency, quantity) => {
        let price = {
            amount: sellAmount,
            currency: currency
        }
        let isbn = {
            type: this.state.book.volumeInfo.industryIdentifiers[0].type,
            identifier: this.props.isbn
        }
        const newBook = {
            isbn: isbn,
            quantity: quantity,
            price: price,
            seller: this.props.session.username
        }
        const addedCourse = await sellBook(newBook)
    }


    render() {
        return (
            <div className="bg-pic">
                <div className="book-details container">
                    <div className="row">
                        <div className="col-3">
                            <br/>
                            <br/>
                            <br/>
                            {console.log(t(this.state.book, 'volumeInfo.title').safeObject)}
                            {t(this.state.book,'volumeInfo.imageLinks').safeObject &&
                            <img className="card-img-top"
                                 src={t(this.state.book,'volumeInfo.imageLinks').safeObject &&
                                 t(this.state.book,'volumeInfo.imageLinks.thumbnail').safeObject}
                                 alt="Card image cap"/>}
                        </div>
                        <div className="col-6">
                            <br/>
                            <br/>
                            <br/>
                            {t(this.state.book,'volumeInfo.title').safeObject &&
                            <h1 className="text-center">{t(this.state.book,'volumeInfo.title').safeObject}</h1>}
                            <h6 className="float-right">By {t(this.state.book,'volumeInfo.authors').safeObject}</h6>
                            <br/>
                            <br/>

                            {t(this.state.book,'volumeInfo.description').safeObject &&
                            <div className="card z-depth-5">
                                <div className="card-body">
                                    {t(this.state.book,'volumeInfo.description').safeObject}
                                </div>
                            </div>}

                        </div>
                        <div className=" col-3">
                            <br/>
                            <br/>
                            <br/>

                            <div className="card">
                                <div className="card-body">
                                    {this.props.session.userType == 'BUYER' && <div>
                                    <h6 className="card-subtitle mb-2 text-muted">Buy <em>Used Very Good</em></h6>
                                    <br/>
                                    <h3>$3.98
                                        <span
                                            className="small text-muted"> USD</span></h3>
                                    <p className=""><strong>FREE
                                        SHIPPING!</strong>
                                    </p>

                                    <button className="btn btn-block btn-success">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        &nbsp; Add To Cart
                                    </button>
                                    <button className="btn btn-block">
                                        <i className="fas fa-heart"></i>
                                        &nbsp; Add to wishlist
                                    </button>
                                    </div>}


                                    {this.props.session.userType == 'SELLER' &&
                                        this.state.bookAlreadyListed &&
                                        <div>
                                            <button className="btn btn-block btn-success disabled">
                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                &nbsp; Cannot Be Sold
                                            </button>
                                        </div>}

                                    {this.props.session.userType == 'SELLER' &&
                                        !this.state.bookAlreadyListed && <div>
                                    <div class="input-group mb-3">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                          </div>
                                          <input type="text"
                                                 class="form-control"
                                                 aria-label="Amount"
                                                 placeholder="Selling Price"
                                                 onChange={(e) => this.setState({
                                                                    sellAmount: e.target.value
                                                                })} />
                                        </div>
                                        <div class="input-group mb-3">
                                          <input type="text"
                                                 class="form-control"
                                                 aria-label="Quantity"
                                                 placeholder="Quantity"
                                                 onChange={(e) => this.setState({
                                                                    quantity: e.target.value
                                                                })} />
                                        </div>

                                        <button className="btn btn-block btn-success"
                                                onClick={() => this.addBookForSell(this.state.sellAmount, 'USD', this.state.quantity)}>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            &nbsp; Sell
                                        </button>
                                       </div>}
                                </div>

                            </div>
                        </div>


                    </div>
                    <br/>
                    <br/>
                    <div className="col-md-12"><h5>About the
                        Book</h5>
                        <table className="table table-striped table-condensed">
                            <tbody>
                            <tr>
                                <td><label>Format</label></td>
                                <td><span>Paperback Book</span></td>
                                <td className="hidden-xs"><label>Language</label></td>
                                <td className="hidden-xs">English</td>
                            </tr>
                            <tr>
                                <td><label>Publisher</label></td>
                                <td><span>Penguin</span>
                                </td>
                                <td className="hidden-xs"><label>Edition</label></td>
                                <td className="hidden-xs"><span itemProp="bookEdition">Unknown</span></td>
                            </tr>
                            <tr>
                                <td><label>ISBN-13</label></td>
                                <td><span>9781250117663</span></td>
                                <td className="hidden-xs"><label>Dimensions</label></td>
                                <td className="hidden-xs"></td>
                            </tr>
                            <tr>
                                <td><label>ISBN-10</label></td>
                                <td><span itemProp="isbn">1250117666</span></td>
                                <td className="hidden-xs"><label>Shipping Weight</label></td>
                                <td className="hidden-xs">0.71 lbs</td>
                            </tr>
                            <tr>
                                <td id="mobile-editions-scrollpoint"><label>Categories</label></td>
                                <td colSpan="3">Espionage Intrigue
                                    Fiction and Literature
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)
(withRouter(BookDetails))
