import React from "react";
import {Link, withRouter} from "react-router-dom";
import {login} from "../../services/UserService";

class LoginComponent extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleLogin = (user) => {
        login(user)
            .then(newUser => {
                this.props.history.push('/')
                this.props.homeNameChanger(newUser.username)
            })
            .catch(error => {
                console.log(error)
                window.alert("Incorrect emailId or password")
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control "
                                   id="email"
                                   value={this.state.email}
                                   onChange={(e) => this.setState({
                                                                      email: e.target.value
                                                                  })}
                                   placeholder="alice@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password"
                                   value={this.state.password}
                                   onChange={(e) => this.setState({
                                                                      password: e.target.value
                                                                  })}
                                   placeholder="123qwe#$%"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col btn btn-primary"
                                     onClick={() => this.handleLogin(this.state)}>
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

export default withRouter(LoginComponent)
