import * as React from "react";
import {getWishListItems} from "../../services/WishService";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import t from "typy";
import './WishlistComponent.css'


const mapStateToProps = ({session}) => ({
    session
});

class WishlistComponent extends React.Component {

    state = {
        books:[],
    }

    componentDidMount = async () => {
        this.setState(({
            books: await getWishListItems(this.props.session.username)
        }))

        console.log("wishes" , this.state.books);
    }


    // deleteBookListing = async (isbn) => {
    //     await deleteBookListing(isbn)
    //     window.location.reload();
    // }

    render() {
        return (
            <div className="search-results-color">
                &nbsp;
                <h1 className="carousel-style search-heading">Your Wishlist :</h1>
                <div id="searchResultsContainer" className="py-5 px-5 card-group">
                    <div className="container">
                        <ul className="list-group">
                            <div className="row">
                                {
                                    this.state.books &&
                                    this.state.books.map(book =>
                                                             <div
                                                                 className="col-sm-4 col-md-3">
                                                                     <div
                                                                         className="text-center card-fixed-size">
                                                                         {book.image
                                                                          &&
                                                                          <img
                                                                              className="img-size"
                                                                              src={book.image}
                                                                              alt=""/>}
                                                                     </div>
                                                                     <div
                                                                         className="img-title text-center carousel-style">
                                                                         <a>
                                                                             {book.title}
                                                                         </a>
                                                                     </div>
                                                                     <button className="btn btn-dark btn-block search-btn">
                                                                         <i className="fas fa-plus elem"></i>
                                                                         &nbsp;
                                                                         More Details
                                                                     </button>
                                                                 <br/>
                                                                 <br/>
                                                             </div>
                                    )
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        )


    }
}

export default connect(mapStateToProps)
(withRouter(WishlistComponent))
