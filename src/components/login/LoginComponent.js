import React from "react";
import {Link, withRouter} from "react-router-dom";
import {login} from "../../actions/session";
import logo from "../../logo.svg";
import './LoginComponent.css';

import {connect} from "react-redux";

const mapStateToProps = ({errors}) => ({
    errors
});
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

class LoginComponent extends React.Component {

    handleSubmit = (user) =>
        this.props.login(user);

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="container text-center">
                <br/>
                <br/>
                <h3 className={this.props.errors ? 'alert alert-danger'
                                                 : ''}>{this.props.errors}</h3>
                <form className="form-signin">

                    <i className="fas fa-book-reader fa-4x fa-spin"></i>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                            <input type="email" className="form-control "
                                   // value={this.state.user.email}
                                   onChange={(event => {
                                           const newEmail = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   email: newEmail
                                               }
                                           }))
                                       }
                                   )}
                                   id="email" placeholder="Email Address"/>

                            <input type="password" className="form-control"
                                   value={this.state.user.password}
                                   title="must be between 6-16 characters,have at least one capital letter, one lowercase letter, one digit, and one special character"
                                   onChange={(event => {
                                           const newPassword = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   password: newPassword
                                               }
                                           }))
                                       }
                                   )}
                                   id="password" placeholder="Password"/>


                                <br/>
                                <div className="col btn btn-primary"
                                     onClick={() => this.handleSubmit(this.state.user)}>
                                    Login
                                </div>

                                    <Link to="/signUp"
                                          className="float-right">Sign Up</Link>
                </form>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginComponent));
