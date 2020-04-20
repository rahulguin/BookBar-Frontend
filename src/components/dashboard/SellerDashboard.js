import React from 'react';
import {getAllOrdersForSeller} from "../../services/OrderService";
import {getAllBooks, searchBooksByISBN} from "../../services/BookService";

class SellerDashboard extends React.Component {

    state = {
        orders: []
    }

    componentDidMount = async () => {
        await getAllOrdersForSeller(this.props.username)
            .then(orders => this.setState({
                orders: orders
            }))
        let totalSold = 0;
        let price = 0;
        let lastOrder = {};
        let recentOrder = {};
        let recentBuyer = '';
        let totalListed = 0;
        let numBooks = 0;

        this.state.orders.forEach(order => {
            order.items.forEach(item => {
                if(item.seller === this.props.username){
                    totalSold = totalSold + parseInt(item.quantity);
                    price = price + parseInt(item.totalPrice);
                    lastOrder = item;
                }
            })
            recentOrder = lastOrder;
            recentBuyer = order.buyer;
        })

        let allBooks = await getAllBooks()
        allBooks.forEach(book => {
          if(book.seller == this.props.username){
            totalListed = totalListed + book.quantity;
            numBooks = numBooks + 1;
          }
        })

        this.setState({
            totalBooks: totalSold,
            totalPrice: price,
            totalUnsold: totalListed-totalSold,
            numBooks: numBooks,
            mostRecentOrder: recentOrder,
            mostRecentBuyer: recentBuyer
        })

    }

    render() {
        return (
            <div>
                <span className="font-weight-bold">Number of books listed: </span> {this.state.numBooks}
                <br />
                <span className="font-weight-bold">Total quantity sold: </span> {this.state.totalBooks}
                <br />
                <span className="font-weight-bold">Total quantity un-sold: </span> {this.state.totalUnsold}
                <br />
                <span className="font-weight-bold">Total amount earned: </span> {this.state.totalPrice}
                <br />
                <span className="font-weight-bold">Last buyer: </span> {this.state.mostRecentBuyer}
                <br />
                <span className="font-weight-bold">Last Order: </span> {console.log(this.state.mostRecentOrder)}
                <br />

            </div>

        );
    }
}

export default SellerDashboard;

