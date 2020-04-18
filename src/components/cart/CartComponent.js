import * as React from "react";
import './CartComponent.css'

export default class CartComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="cart-header">Your Basket</h1>
                <button className="btn btn-dark float-right">
                    Proceed to checkout
                </button>
            </div>)
    }
}
