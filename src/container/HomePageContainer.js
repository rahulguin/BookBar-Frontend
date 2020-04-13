import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import BookManagerHeadingComponent from "../components/BookManagerHeadingComponent";
import LoginComponent from "../components/login/LoginComponent";
import SignUpComponent from "../components/register/SignUpComponent";
import SearchBoxComponent from "../components/SearchBoxComponent";
import BookDetailsComponent from "../components/BookDetailsComponent";
import BookBannerComponent from "../components/BookBannerComponent";
import CartComponent from "../components/cart/CartComponent";
import OrderComponent from "../components/orders/OrderComponent";
import ProfileComponent from "../components/profile/ProfileComponent";

class HomePageContainer extends React.Component {

    state = {
        username: 'Home',
        loggedIn: false
    }

    homeNameChanger = (username) => {
        this.setState({
            username: username
        })
    }

    logoutNameChanger = () => {
        this.setState({
            username: 'Home'
        })
    }

    login = () => {
        this.setState({
            loggedIn: true
        })
    }

    logout = () => {
        this.setState({
            loggedIn: false
        })
    }


    render() {
        return (
            <div>
                <Router>
                    <Route path="/"
                           exact={true}
                           render={(props) => {
                               return [
                                   <BookManagerHeadingComponent
                                       logoutNameChanger={this.logoutNameChanger}
                                       loggedIn={this.state.loggedIn}
                                       login={this.login}
                                       logout={this.logout}
                                       username={this.state.username}/>,
                                   <BookBannerComponent/>,
                                   <SearchBoxComponent
                                       {...props}/>]
                           }
                           }/>
                    <Route path="/search"
                           exact={true}
                           render={(props) => {
                               return [
                                   <BookManagerHeadingComponent
                                       logoutNameChanger={this.logoutNameChanger}
                                       loggedIn={this.state.loggedIn}
                                       login={this.login}
                                       logout={this.logout}
                                       username={this.state.username}/>,
                                   <BookBannerComponent/>,
                                   <SearchBoxComponent
                                       {...props}/>
                               ]
                           }
                           }/>
                    <Route path="/bookDetails/:id"
                           exact={true}
                           render={(props) => {
                               return [
                                   <BookManagerHeadingComponent
                                       logoutNameChanger={this.logoutNameChanger}
                                       loggedIn={this.state.loggedIn}
                                       login={this.login}
                                       logout={this.logout}
                                       username={this.state.username}/>,
                                   <BookDetailsComponent
                                       id={props.match.params.id}
                                       {...props}/>
                               ]
                           }
                           }/>
                    <Route path="/login"
                           exact={true}
                           render={(props) => {
                               return [
                                   <LoginComponent
                                       homeNameChanger={this.homeNameChanger}
                                       session={this.state.session}
                                       {...props}/>
                               ]
                           }

                           }/>
                    <Route path="/signUp"
                           exact={true}
                           render={(props) =>
                               <SignUpComponent/>
                           }/>
                    {/*<Route path="/profile"*/}
                    {/*       exact={true}*/}
                    {/*       render={(props) =>*/}
                    {/*           <ProfileComponent/>*/}
                    {/*       }/>*/}

                    <Route path="/cart"
                           exact={true}
                           render={(props) => {
                               return [
                                   <BookManagerHeadingComponent
                                       logoutNameChanger={this.logoutNameChanger}
                                       loggedIn={this.state.loggedIn}
                                       login={this.login}
                                       logout={this.logout}
                                       username={this.state.username}/>,
                                   <CartComponent/>
                               ]
                           }

                           }/>
                    <Route path="/orders"
                           exact={true}
                           render={(props) => {
                               return [
                                   <BookManagerHeadingComponent
                                       logoutNameChanger={this.logoutNameChanger}
                                       loggedIn={this.state.loggedIn}
                                       login={this.login}
                                       logout={this.logout}
                                       username={this.state.username}/>,
                                   <OrderComponent/>
                               ]
                           }

                           }/>
                </Router>
            </div>
        );
    }
}

export default HomePageContainer;
