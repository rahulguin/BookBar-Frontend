import React from "react";
import './SignUpComponent.css';
import {Link, withRouter} from "react-router-dom";
// import {register} from '../../services/UserService'
import {signup} from "../../actions/session";
import {connect} from "react-redux";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

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
            <div className="container text-center">
                <br/>
                <br/>
                <h3 className={this.props.errors ? 'alert alert-danger'
                                                 : ''}>{this.props.errors}</h3>
                <form className="form-signin">
                    <br/>

                    <Fade left>
                        <i className="fas fa-bold fa-4x"></i>
                    </Fade>
                    <Fade right>
                        <i className="fas fa-cocktail fa-4x"></i>
                    </Fade>


                    <div><br/></div>
                    <Zoom left>
                        <h1 className="h3 mb-3 font-weight-normal text-center">New here? Create a free account!</h1>
                    </Zoom>

                    {/*<div className="form-group row">*/}

                        {/*<div className="col-sm-2"></div>*/}
                        <Fade left>
                            <label htmlFor="username" className="col-sm-6 col-form-label float-left text-left font-weight-light">
                            Username </label>
                        </Fade>
                        {/*<div className="col-sm-4">*/}
                        <Fade right>
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
                        </Fade>

                        <Fade left>
                        <label htmlFor="password" className="col-sm-6 col-form-label float-left text-left font-weight-light">
                            Password </label>
                        </Fade>
                        {/*<div className="col-sm-4">*/}
                        <Fade right>
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
                             </Fade>
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                    {/*    <div className="col-sm-2"></div>*/}
                        <Fade left>
                        <label htmlFor="verify-password" className="col-sm-6 col-form-label float-left text-left font-weight-light">
                            Verify Password </label>
                        </Fade>
                        {/*<div className="col-sm-4">*/}
                        <Fade right>
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
                        </Fade>
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                    {/*    <div className="col-sm-2"></div>*/}
                    <Fade left>
                        <label htmlFor="email" className="col-sm-6 col-form-label float-left text-left font-weight-light">
                            Email </label>
                    </Fade>
                        {/*<div className="col-sm-4">*/}
                     <Fade right>
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
                     </Fade>
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                    {/*    <div className="col-sm-2"></div>*/}
                    <Fade left>
                        <label htmlFor="userTypeFld" className="col-sm-6 col-form-label float-left text-left font-weight-light">
                            User type </label>
                    </Fade>
                        {/*<div className="col-sm-4 ">*/}
                        <Fade right>
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
                        </Fade>
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="form-group row">*/}
                    {/*    <label className="col-sm-2 col-form-label"></label>*/}
                        {/*<div className="col-sm-6">*/}
                        {/*    <div>*/}
                        <br/>
                                <div
                                    className="  btn btn-primary btn-block wbdv-button wbdv-register"
                                    onClick={() => this.handleSignUp(this.state.user)}
                                >Sign Up
                                </div>

                                    <Link to="/login"
                                          className="wbdv-link wbdv-login float-left text-left">Log In</Link>

                </form>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignUpComponent))

