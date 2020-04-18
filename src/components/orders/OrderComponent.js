import * as React from "react";
import './OrderComponent.css';
import {getAllBooks, searchBooksByISBN} from "../../services/BookService";
import SellerInventoryItem from "./SellerInventoryItem";
import {logout} from "../../actions/session";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const mapStateToProps = ({session}) => ({
    session
});

class OrderComponent extends React.Component {

    state = {
        books: []
    }

    componentDidMount = () => {
        let allBooks = getAllBooks()
            .then(books => this.setState(({
                books:books
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
                                <SellerInventoryItem
                                    book = {book} />
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
