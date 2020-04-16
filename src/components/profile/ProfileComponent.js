import React from "react";
import {updateProfile} from "../../services/UserService";

export default class ProfileComponent extends React.Component {
    state = {
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
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
                                   value={this.state.firstName}
                                   onChange={(event => {
                                           const newFirstName = event.target.value
                                           this.setState(prevState => ({
                                                   ...prevState,
                                                   firstName: newFirstName
                                           }))
                                       }
                                   )}
                                   id="firstName" placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.lastName}
                                   onChange={(event => {
                                           const newLastName = event.target.value
                                           this.setState(prevState => ({
                                                   ...prevState,
                                                   lastName: newLastName
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
                                   value={this.state.password}
                                   title="must be between 6-16 characters,have at least one capital letter, one lowercase letter, one digit, and one special character"
                                   onChange={(event => {
                                           const newPassword = event.target.value
                                           this.setState(prevState => ({
                                                   ...prevState,
                                                   password: newPassword
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
                                   value={this.state.email}
                                   onChange={(event => {
                                           const newEmail = event.target.value
                                           this.setState(prevState => ({
                                                   ...prevState,
                                                   email: newEmail
                                           }))
                                       }
                                   )}
                                   id="email" placeholder="alice@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="street" className="col-sm-2 col-form-label">
                            Street </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control "
                                   value={this.state.address.street}
                                   onChange={(event => {
                                           const newStreet = event.target.value
                                           this.setState(prevState => ({
                                               address: {
                                                   ...prevState.address,
                                                   street: newStreet
                                               }
                                           }))
                                       }
                                   )}
                                   id="street" placeholder="Street"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="city" className="col-sm-2 col-form-label">
                            City </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control "
                                   value={this.state.address.city}
                                   onChange={(event => {
                                           const newCity = event.target.value
                                           this.setState(prevState => ({
                                               address: {
                                                   ...prevState.address,
                                                   city: newCity
                                               }
                                           }))
                                       }
                                   )}
                                   id="city" placeholder="City"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="state" className="col-sm-2 col-form-label">
                            State </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control "
                                   value={this.state.address.state}
                                   onChange={(event => {
                                           const newState = event.target.value
                                           this.setState(prevState => ({
                                               address: {
                                                   ...prevState.address,
                                                   state: newState
                                               }
                                           }))
                                       }
                                   )}
                                   id="state" placeholder="State"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="country" className="col-sm-2 col-form-label">
                            Street </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control "
                                   value={this.state.address.country}
                                   onChange={(event => {
                                           const newCountry = event.target.value
                                           this.setState(prevState => ({
                                               address: {
                                                   ...prevState.address,
                                                   country: newCountry
                                               }
                                           }))
                                       }
                                   )}
                                   id="country" placeholder="Country"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="pincode" className="col-sm-2 col-form-label">
                            Pincode </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control "
                                   value={this.state.address.pincode}
                                   onChange={(event => {
                                           const newPinCode = event.target.value
                                           this.setState(prevState => ({
                                               address: {
                                                   ...prevState.address,
                                                   pincode: newPinCode
                                               }
                                           }))
                                       }
                                   )}
                                   id="pincode" placeholder="001234"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <div>
                                <div
                                    className="  btn btn-primary btn-block wbdv-button wbdv-register"
                                    onClick={() => this.updateProfile(this.state)}
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
