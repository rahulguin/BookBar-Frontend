import * as React from "react";
import "./BookBannerComponent.css"

export default class BookBannerComponent extends React.Component {

    state = {
        title: ''
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <br/>
                    <br/>
                    <br/>

                    <h1>BookBar: The Online Book Store</h1>
                    <p>Welcome to BookBar, our Web Development final project!</p>
                </div>
            </div>)
    }
}


