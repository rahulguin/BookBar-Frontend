import * as React from "react";
import './OrderComponent.css';
import {getAllBooks, searchBooksByISBN} from "../../services/BookService";
import t from 'typy';
import {Link, withRouter} from "react-router-dom";

class SellerInventoryItem extends React.Component {

    state = {
        currentBook: {}
    }

    componentDidMount = async () => {
        this.setState(({
            currentBook: await searchBooksByISBN(this.props.book.isbn.identifier)
        }))
    }

    editBookListing = () => {

    }

    deleteBookListing = () => {

    }

    render() {
        return (
            <div>
                <div className="">
                    <div id="searchResultsContainer" className="py-5 px-5 card-group">
                        <div className="container">
                            <ul className="list-group">
                                <div className="row">
                                    <div className="col-3">
                                        <Link to={`/bookDetails/${t(
                                                 this.state.currentBook,
                                                 'volumeInfo.industryIdentifiers[0].identifier').safeObject}`}>
                                            {t(this.state.currentBook,'volumeInfo.imageLinks').safeObject &&
                                                <img className="card-img-top"
                                                     src={t(this.state.currentBook,'volumeInfo.imageLinks').safeObject &&
                                                     t(this.state.currentBook,'volumeInfo.imageLinks.thumbnail').safeObject}
                                                     alt="Card image cap"/>}
                                        </Link>
                                    </div>

                                    <div className="col-9">
                                        <div className="card z-depth-5">
                                            <div className="card-body">
                                                <table className="table table-striped table-condensed">
                                                    <tbody>
                                                    <tr>
                                                        <td><label className="font-weight-bold">Title</label></td>
                                                        <td><span>{t(this.state.currentBook,'volumeInfo.title').safeObject}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="font-weight-bold">Author</label></td>
                                                        <td><span>{t(this.state.currentBook,'volumeInfo.authors').safeObject}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="font-weight-bold">ISBN-13</label></td>
                                                        <td><span>{this.props.book.isbn.identifier}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="font-weight-bold">Price</label></td>
                                                        <td><span itemProp="isbn">{this.props.book.price.currency} {this.props.book.price.amount}</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold"><label>Quantity</label></td>
                                                        <td>{this.props.book.quantity}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="font-weight-bold"></td>
                                                        <td>
                                                            <button type="button" class="btn btn-success float-right">
                                                                <i class="fas fa-trash"></i> Delete Listing
                                                            </button>
                                                            <button type="button" class="btn btn-success float-right">
                                                                <i class="fas fa-edit"></i> Edit Listing
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}

export default SellerInventoryItem;