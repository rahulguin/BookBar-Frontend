import React from 'react';
import './BookManagerHeadingComponent.css';
import {Link, withRouter} from "react-router-dom";
import {logout} from "../actions/session";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";

const mapStateToProps = ({session}) => ({
    session
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

class BookManagerHeadingComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light picture sticky">
                <Link className="navbar-brand " to="/">
                    <Button>{this.props.session.username ? this.props.session.username : "Home"}</Button>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {!this.props.session.username && <li className="nav-item">
                            <Link className="nav-link"
                                  to={`/login`}>
                                <Button color="primary">Login</Button>
                            </Link>
                        </li>}
                        {!this.props.session.username && <li className=" nav-item">
                            <Link className="nav-link "
                                  to={`/signUp`}>
                                <Button color="primary">Sign Up</Button>
                            </Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link "
                                  to={`/cart`}>
                                <Button color="primary">Manage Cart</Button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link "
                                  to={`/orders`}>
                                <Button color="primary">Manage Order</Button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link "
                                  to={`/profile`}>
                                <Button color="primary">Profile</Button>
                            </Link>
                        </li>
                        {this.props.session.username && <li className={'nav-item'}>
                            <a className="nav-link wbdv-logout"
                               onClick={() => this.props.logout()}>
                                <Button color="Secondary">LogOut</Button>
                            </a>
                        </li>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
(withRouter(BookManagerHeadingComponent))



