import * as React from "react";
import "./BookBannerComponent.css"
import {Link} from "react-router-dom";

export default class BookBannerComponent extends React.Component {

    state = {
        title: ''
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid jumbotron-color">
                <div className="container">
                    <br/>
                    <br/>
                    <br/>

                    <h1 className="text-center h1-color">Shop online with Bookbar,</h1>
                    <h1 className="text-center h1-color">our Web Development final project!</h1>
                </div>
            </div>)
    }
}


