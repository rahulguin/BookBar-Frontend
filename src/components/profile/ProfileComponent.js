import React from "react";
import {profile} from "../../services/UserService"

export default class ProfileComponent extends React.Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    componentDidMount() {
        // debugger
        // profile().then(profile => {
        //                    this.state.username = profile.username
        //                }
        // )
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               value={this.state.username}
                               onChange={(event =>
                                   this.setState({
                                                     username: event.target.value
                                                 }))}
                               placeholder="username"/>
                    </div>
                </div>
            </div>
        )
    }
}
