import React from 'react';
import {getAllOrdersForUser} from "../../services/OrderService";


class BuyerDashboard extends React.Component {

    state = {
        orders: [],
        mostRecentOrder: {}
    }

    componentDidMount = async () => {
        await getAllOrdersForUser(this.props.username)
            .then(orders => this.setState({
                orders: orders
            }))
        let total = 0;
        let recentOrder = {}
        this.state.orders.forEach(order => {
            order.items.forEach(item => {
                total = total + parseInt(item.quantity);
            })
            recentOrder = order;
        })
        this.setState({
            totalBooks: total,
            mostRecentOrder: recentOrder
        })
    }

    render() {
        return (
            <div>
                <span className="font-weight-bold">Number of orders placed: </span> {this.state.orders.length}
                <br />
                <span className="font-weight-bold">Number of books ordered: </span> {this.state.totalBooks}
                <br />
                <span className="font-weight-bold">Most recent order: </span>
                    {console.log(this.state.mostRecentOrder)}
            </div>

        );
    }
}

export default BuyerDashboard;

