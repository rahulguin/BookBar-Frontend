import * as React from "react";
import './OrderComponent.css';
import {getAllBooks, searchBooksByISBN, searchBooks} from "../../services/BookService";
import {logout} from "../../actions/session";
import {connect} from "react-redux";
import SearchBoxComponent from "../SearchBoxComponent";
import {Link, withRouter} from "react-router-dom";

const mapStateToProps = ({session}) => ({
    session
});

class OrderComponent extends React.Component {

    state = {
        books: [],
        title: ''
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
                    <div>

                    </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)
(withRouter(OrderComponent))
