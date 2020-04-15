import React from "react";
import {Link, withRouter} from "react-router-dom";
import {login} from "../../actions/session";

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
            <div className="container">
                <br/>
                <br/>
                <h3 className={this.props.errors ? 'alert alert-danger'
                                                 : ''}>{this.props.errors}</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.user.email}
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
                                   id="email" placeholder="alice@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
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
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col btn btn-primary"
                                     onClick={() => this.handleSubmit(this.state.user)}>
                                    Login
                                </div>
                                <div className="col">
                                    <Link to="/"
                                          className="btn btn-primary btn-block float-right">Cancel</Link>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <Link to="/">Forgot Password?</Link>
                                </div>
                                <div className="col">
                                    <Link to="/signUp"
                                          className="float-right">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginComponent));
