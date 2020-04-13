import React from "react";
import './BookDetailsComponent.css';
import {BACKEND_API} from "../common/constants";
import Button from '@material-ui/core/Button';

export default class BookDetails extends React.Component {

    state = {
        booksInfo: {}
    }

    componentDidMount = () => {
        fetch(`${BACKEND_API}/api/book/getBookById/${this.props.id}`)
            .then(response => response.json())
            .then(book => this.setState({
                booksInfo: book
            }))

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
                            {this.state.booksInfo.image &&
                            <img className="card-img-top"
                                 src={this.state.booksInfo.image && this.state.booksInfo.image.smallThumbnail}
                                 alt="Card image cap"/>}
                        </div>
                        <div className="col-6">
                            <br/>
                            <br/>
                            <br/>
                            {this.state.booksInfo.title &&
                            <h1 className="text-center">{this.state.booksInfo.title}</h1>}
                            <h6 className="float-right">By {this.state.booksInfo.authors}</h6>
                            <br/>
                            <br/>

                            {this.state.booksInfo.description &&
                            <div className="card z-depth-5">
                                <div className="card-body">
                                    {this.state.booksInfo.description}
                                </div>
                            </div>}

                        </div>
                        <div className=" col-3">
                            <br/>
                            <br/>
                            <br/>

                            <div className="card">
                                <div className="card-body">
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
                                <td><span>{this.state.booksInfo.publisher}</span>
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
