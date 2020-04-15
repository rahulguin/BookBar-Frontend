import React from "react";
import {updateProfile} from "../../services/UserService";

export default class ProfileComponent extends React.Component {
    state = {
        user: {
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            email: ''
        }
    }

    updateProfile = (user) => updateProfile(user)

    render() {
        return (
            <div className='container'>
                <br/>
                <br/>
                <br/>
                <form>
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.user.firstName}
                                   onChange={(event => {
                                           const newFirstName = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   firstName: newFirstName
                                               }
                                           }))
                                       }
                                   )}
                                   id="firstName" placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.user.lastName}
                                   onChange={(event => {
                                           const newLastName = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   lastName: newLastName
                                               }
                                           }))
                                       }
                                   )}
                                   id="lastName" placeholder="Wonderland"/>
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
                        <label htmlFor="address" className="col-sm-2 col-form-label">
                            Address </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.user.address}
                                   onChange={(event => {
                                           const newAddress = event.target.value
                                           this.setState(prevState => ({
                                               user: {
                                                   ...prevState.user,
                                                   address: newAddress
                                               }
                                           }))
                                       }
                                   )}
                                   id="address" placeholder="Address"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div>
                                <div
                                    className="  btn btn-primary btn-block wbdv-button wbdv-register"
                                    onClick={() => this.updateProfile(this.state.user)}
                                >Update Profile
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
