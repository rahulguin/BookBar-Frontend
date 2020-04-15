import React from "react";
import './SignUpComponent.css';
import {Link, withRouter} from "react-router-dom";
// import {register} from '../../services/UserService'
import {signup} from "../../actions/session";
import {connect} from "react-redux";

const mapStateToProps = ({errors}) => ({
    errors
});
const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
});

class SignUpComponent extends React.Component {

    handleSignUp = (user) =>
        this.props.signup(user);
    state = {
        user: {
            username: '',
            email: '',
            password: '',
            userType: ''
        },
        verifyPassword: ''
    };

    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 className={this.props.errors ? 'alert alert-danger'
                                                 : ''}>{this.props.errors}</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   value={this.state.user.username}
                                   onChange={(event => {
                                           const newUserName = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   username: newUserName
                                               }
                                           }))
                                       }
                                   )}
                                   placeholder="username"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
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
                        <label htmlFor="verify-password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-field wbdv-password-verify"
                                   title="must be between 6-16 characters,have at least one capital letter, one lowercase letter, one digit, and one special character"
                                   onChange={(event => {
                                           const newVerifyPassword = event.target.value
                                           this.setState({
                                                             verifyPassword: newVerifyPassword
                                                         })
                                       }
                                   )}
                                   id="verify-password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
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
                        <label htmlFor="userTypeFld" className="col-sm-2 col-form-label">
                            User type </label>
                        <div className="col-sm-10 ">
                            <select id="userTypeFld"
                                    onChange={(event => {
                                            const newUserType = event.target.value
                                            this.setState(prevState => ({
                                                user: {
                                                    ...prevState.user,
                                                    userType: newUserType
                                                }
                                            }))
                                        }
                                    )}
                                    className="form-control">
                                <option value="">Choose here</option>
                                <option value="SELLER">Seller</option>
                                <option value="BUYER">Buyer</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div>
                                <div
                                    className="  btn btn-primary btn-block wbdv-button wbdv-register"
                                    onClick={() => this.handleSignUp(this.state.user)}
                                >Sign Up
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link to="/login"
                                          className="wbdv-link wbdv-login">Log In</Link>
                                </div>
                                <div className="col">
                                    <Link to="/"
                                          className="wbdv-link wbdv-cancel float-right">Cancel</Link>
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
)(withRouter(SignUpComponent))

