import * as React from "react";
import {getAllBooks, searchBooksByISBN} from "../../services/BookService";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

const mapStateToProps = ({session}) => ({
    session
});

class RetailComponent extends React.Component {

    state = {
        books: []
    }

    componentDidMount = async () => {
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
                <div>
                    {this.state.books && this.state.books.map(book =>
                        book.seller == this.props.session.username ?
                            <div></div>
                            : <div></div>
                    )}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)
(withRouter(RetailComponent))