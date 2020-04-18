import React from "react";
import './BookDetailsComponent.css';
import {BACKEND_API} from "../common/constants";
import Button from '@material-ui/core/Button';
import {searchBooksByISBN, sellBook, searchBooksMatchingIsbn} from "../services/BookService";
import {addToCart} from "../services/cartServices";
import {addToWishList} from "../services/wishService";
import {logout} from "../actions/session";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import t from 'typy';
import _ from 'lodash';
import Fade from "react-reveal/Fade";

const mapStateToProps = ({session}) => ({
    session
});

class BookDetails extends React.Component {

    state = {
        book: {},
        sellAmount: 0,
        quantity: 1,
        available: false,
        price: 33.65,
        seller: "Not Sold"
    }

    componentDidMount = async () => {
        await searchBooksByISBN(this.props.isbn)
            .then(book => this.setState(({
                book: book
            })))
        console.log("here" , this.state.book);

        //to search internal db for price or out of stock
        await searchBooksMatchingIsbn(this.props.isbn)
            .then(res => {
                if (res.length > 0) {
                    this.setState(({
                        available: true,
                        price: res[0].price.amount,
                        seller: res[0].seller
                    }))
                }
            });
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

    addToCart = async ()=>{
        let newTotal = this.state.quantity * this.state.price;
        console.log("newTotal", newTotal);
        let item = {
            "totalPrice": newTotal,
            "quantity": this.state.quantity,
            "image": _.get(this.state.book,['volumeInfo','imageLinks', "thumbnail"], 'No Image'),
            "title": _.get(this.state.book,['volumeInfo','title'], 'No Title'),
        }

        let username = this.props.session.username;

        console.log("item", item);

        let res = await addToCart(item, username)

        console.log("res add cart" , res);

        alert(`${item.quantity} ${item.title} book added to your cart!! Go to cart for checkout!`)
    }

    addToWishList = async ()=>{
        let item = {
            "image": _.get(this.state.book,['volumeInfo','imageLinks', "thumbnail"], 'No Image'),
            "title": _.get(this.state.book,['volumeInfo','title'], 'No Title'),
        }

        let username = this.props.session.username;

        console.log("item", item);
        if(this.props.session.username != null){
            let res = await addToWishList(item, username)
            alert(` ${item.title} book added to your wishlist!!`)
        }else{
            alert('Login to create your wishlist!!')
        }

    }


    render() {
        return (
            <div className="bg-pic container">
                <div className="book-details container">
                    <div className="row">
                        <div className="col-sm-3">
                            <br/>
                            <br/>
                            <br/>
                            {t(this.state.book, 'volumeInfo.imageLinks').safeObject &&
                            <img className="card-img-top"
                                 src={t(this.state.book, 'volumeInfo.imageLinks').safeObject &&
                                 t(this.state.book, 'volumeInfo.imageLinks.thumbnail').safeObject}
                                 alt="Card image cap"/>}
                        </div>
                        <div className="col-sm-6">
                            <br/>
                            <br/>
                            <br/>
                            {t(this.state.book, 'volumeInfo.title').safeObject &&
                            <h2 className="text-center">{t(this.state.book, 'volumeInfo.title').safeObject}</h2>}
                            <h6 className="float-right">By {[t(this.state.book, 'volumeInfo.authors').safeObject].join(', ')}</h6>
                            <br/>
                            <br/>
                            <h4>Description</h4>
                            <div className="">
                                <p> {t(this.state.book, 'volumeInfo.description').safeObject}</p>
                            </div>


                        </div>
                        <div className="col-sm-3">
                            <br/>
                            <br/>
                            <br/>
                            <div className="card">
                                <div className="card-body">
                                        {(this.props.session.userType == undefined ||this.props.session.userType == 'BUYER')
                                         && this.state.available == true && <div>
                                        <h6 className="card-subtitle mb-2 text-muted"><em>Purchase this book for: </em>
                                        </h6>
                                        {/*<br/>*/}
                                        <h3>$ {this.state.price}
                                            <span
                                                className="small text-muted"> USD</span></h3>
                                        <p className=""><strong>FREE
                                            SHIPPING!</strong>
                                        </p>
                                             {this.props.session.username !== null && <div>
                                         <p>
                                             <label className="firstLabel">Quantity:  </label>
                                             <select className="col-sm-5 form-class"
                                                onChange={(event => {
                                                        const newValue = event.target.value
                                                        this.setState(({
                                                            quantity: newValue
                                                        }))
                                                    }
                                                )}
                                                >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                         </p>
                                             <br/>

                                        <button className="btn btn-block btn-success" onClick={()=> this.addToCart()}>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            &nbsp; Add To Cart
                                        </button>
                                        <button className="btn btn-block text-white" onClick={()=> this.addToWishList()}>
                                            <i className="fas fa-heart text-white" aria-hidden="true"></i>
                                            &nbsp; Add to wishlist
                                        </button>
                                             </div>}

                                    </div>}

                                    {  ((this.props.session.userType == undefined ||this.props.session.userType == 'BUYER')
                                       && this.state.available == false) && <div>
                                        <h6 className="card-subtitle mb-2 text-muted"><em>Out of stock!!
                                            Please check back after few days. </em></h6>
                                        <br/>
                                        <h3>$3.98
                                            <span
                                                className="small text-muted"> USD</span></h3>
                                        <p className=""><strong>FREE
                                            SHIPPING!</strong>
                                        </p>

                                        {/*<button className="btn btn-block btn-success">*/}
                                        {/*    <i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                                        {/*    &nbsp; Add To Cart*/}
                                        {/*</button>*/}
                                        <button className="btn btn-block text-white" onClick={()=> this.addToWishList()}>
                                            <i className="fas fa-heart text-white"></i>
                                            &nbsp; Add to wishlist
                                        </button>
                                    </div>}


                                    {this.props.session.userType == 'SELLER' && <div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="text"
                                                   className="form-control"
                                                   aria-label="Amount"
                                                   placeholder="Selling Price"
                                                   onChange={(e) => this.setState({
                                                       sellAmount: e.target.value
                                                   })}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text"
                                                   className="form-control"
                                                   aria-label="Quantity"
                                                   placeholder="Quantity"
                                                   onChange={(e) => this.setState({
                                                       quantity: e.target.value
                                                   })}/>
                                        </div>

                                        <button className="btn btn-block btn-success"
                                                onClick={() => this.addBookForSell(this.state.sellAmount, 'USD', this.state.quantity)}>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            &nbsp; Sell
                                        </button>
                                    </div>}

                                </div>

                                {this.props.session.userType == 'SELLER' && <div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text"
                                               className="form-control"
                                               aria-label="Amount"
                                               placeholder="Selling Price"
                                               onChange={(e) => this.setState({
                                                   sellAmount: e.target.value
                                               })}/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text"
                                               className="form-control"
                                               aria-label="Quantity"
                                               placeholder="Quantity"
                                               onChange={(e) => this.setState({
                                                   quantity: e.target.value
                                               })}/>
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






                <div className="container book-details col-md-12">
                    <h5>About the
                    Book</h5>
                    <table className="table table-striped table-condensed">
                        <tbody>
                        <tr>
                            <td><label>Format</label></td>
                            <td><span>{_.get(this.state.book,['volumeInfo','printType'], '-')}</span></td>
                            <td className="hidden-xs"><label>Language</label></td>
                            <td className="hidden-xs">{_.get(this.state.book,['volumeInfo','language'], 'en')}</td>
                        </tr>
                        <tr>
                            <td><label>Publisher</label></td>
                            <td><span>{_.get(this.state.book,['volumeInfo','publisher'], 'NO Publisher')}</span>
                            </td>
                            <td className="hidden-xs"><label>Rating</label></td>
                            <td className="hidden-xs"><span itemProp="bookEdition">{_.get(this.state.book,['volumeInfo','averageRating'], '5')}/5</span></td>
                        </tr>
                        <tr>
                            <td><label>ISBN</label></td>
                            <td><span>{_.get(this.state.book,['volumeInfo','industryIdentifiers', '0', 'identifier'], 'No ISBN')}</span></td>
                            <td className="hidden-xs"><label>Page Count</label></td>
                            <td className="hidden-xs">{_.get(this.state.book,['volumeInfo','pageCount'], '150')}</td>
                        </tr>

                        <tr>
                            <td><label>Categories</label></td>
                            <td >{_.get(this.state.book,['volumeInfo','categories'], 'No ISBN')}</td>
                            <td className="hidden-xs"><label>Seller</label></td>
                            <td className="hidden-xs">{this.state.seller}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

           </div>

        )
    }
}

export default connect(mapStateToProps)
(withRouter(BookDetails))
