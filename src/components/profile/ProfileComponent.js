import React from "react";
import {getUserDetails, updateProfile} from "../../services/UserService";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import {withRouter} from "react-router-dom";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        getUserDetails()
            .then(user => {
                let localAddress = {
                    street: '',
                    city: '',
                    state: '',
                    country: '',
                    pincode: '',
                }
                if (user.address) {
                    localAddress = user.address
                }
                this.setState({
                                  password: user.password,
                                  firstName: user.firstName,
                                  lastName: user.lastName,
                                  email: user.email,
                                  address: localAddress
                              }
                )
            })
    }

    updateProfile = (user) => updateProfile(user).then(res => {
        if (res.ok) {
            const response = res.json()
            this.props.history.push("/")
            return response
        } else {
            window.alert("Invalid information entered. ")
        }
    })

    render() {
        return (
            <div className='container'>
                <br/>
                <br/>
                <br/>
                <form className={'form-signin'}>
                    <Fade left>
                        <label htmlFor="firstName"
                               className="col-sm-6 col-form-label float-left text-left">
                            First Name </label>
                    </Fade>
                    <Fade right>
                        <input type="text" className="form-control "
                               value={this.state.firstName}
                               defaultValue={this.state.firstName}
                               onChange={(event => {
                                       const newFirstName = event.target.value
                                       this.setState(prevState => ({
                                           ...prevState,
                                           firstName: newFirstName
                                       }))
                                   }
                               )}
                               id="firstName" placeholder="Alice"/>
                    </Fade>
                    <Fade left>
                        <label htmlFor="lastName"
                               className="col-sm-6 col-form-label float-left text-left">
                            Last Name </label>
                    </Fade>
                    <Fade right>
                        <input type="text" className="form-control "
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="password"
                               className="col-sm-6 col-form-label float-left text-left">
                            Password </label>
                    </Fade>
                    <Fade right>
                        <input type="password"
                               className="form-control wbdv-field wbdv-password"
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="email"
                               className="col-sm-6 col-form-label float-left text-left">
                            Email </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="street"
                               className="col-sm-6 col-form-label float-left text-left">
                            Street </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="city" className="col-sm-2 col-form-label">
                            City </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="state"
                               className="col-sm-6 col-form-label float-left text-left">
                            State </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="country" className="col-sm-2 col-form-label">
                            Street </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <Fade left>
                        <label htmlFor="pincode"
                               className="col-sm-6 col-form-label float-left text-left">
                            Pincode </label>
                    </Fade>
                    <Fade right>
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
                    </Fade>
                    <br/>
                    <Jello>
                        <div
                            className={' col-form-label float-left text-left  btn'
                                       + ' btn-primary btn-block'}
                            onClick={() => this.updateProfile(this.state)}>
                            Update Profile
                        </div>
                    </Jello>
                </form>
            </div>
        )
    }
}

export default withRouter(ProfileComponent);

