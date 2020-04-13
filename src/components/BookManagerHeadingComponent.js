import React from 'react';
import './BookManagerHeadingComponent.css';
import {Link, withRouter} from "react-router-dom";
import {logout} from "../services/UserService";
import Button from '@material-ui/core/Button';

class BookManagerHeadingComponent extends React.Component {

    handleLogout = () =>
        logout()
            .then(res => this.props.history.push('/'))
            .then(this.props.logoutNameChanger)
            .then(this.props.logout)



    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light picture sticky">
                <Link className="navbar-brand " to="/">
                    <Button>{this.props.username}</Button>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {!this.props.loggedIn && <li className="nav-item">
                            <Link className="nav-link"
                                  onClick={this.props.login}
                                  to={`/login`}>
                                <Button color="primary">Login</Button>
                            </Link>
                        </li>}
                        {!this.props.loggedIn && <li className=" nav-item">
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
                        {this.props.loggedIn && <li className={'nav-item'}>
                            <a className="nav-link wbdv-logout"
                               onClick={() => this.handleLogout()}>
                                <Button color="Secondary">LogOut</Button>
                            </a>
                        </li>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(BookManagerHeadingComponent)



