import React from 'react';
import {Route} from "react-router-dom";
import {AuthRoute, ProtectedRoute} from "../util/route";
import BookManagerHeadingComponentCopy from "../components/BookManagerHeadingComponent";
import SignUpComponent from "../components/register/SignUpComponent";
import LoginComponent from "../components/login/LoginComponent";
import ProfileComponent from "../components/profile/ProfileComponent";
import SearchBoxComponent from "../components/SearchBoxComponent";
import BookDetailsComponent from "../components/BookDetailsComponent";
import CartComponent from "../components/cart/CartComponent";
import OrderComponent from "../components/orders/OrderComponent";
import InventoryComponent from "../components/inventory/InventoryComponent";
import RetailComponent from "../components/retail/RetailComponent";
import FooterComponent from "../components/FooterComponent";
import Fade from 'react-reveal/Fade';

class HomePageContainer extends React.Component {

    render() {
        return (
            <div className="all-bg-color">
                <BookManagerHeadingComponentCopy/>,
                <Route path="/"
                       exact={true}
                       render={(props) => {
                           return [
                               <SearchBoxComponent
                                   searchMode={true}
                                   {...props}/>]
                       }
                       }/>

                <Route path="/search/:searchQuery"
                       exact={true}
                       render={(props) => {
                           return [
                               <SearchBoxComponent
                                   searchMode={false}
                                   searchQuery={props.match.params.searchQuery}
                                   {...props}/>]
                       }
                       }/>
                <Route path="/bookDetails/:isbn"
                       exact={true}
                       render={(props) => {
                           return [
                               <BookDetailsComponent
                                   isbn={props.match.params.isbn}
                                   {...props}/>
                           ]
                       }
                       }/>
                <AuthRoute path="/login"
                           exact={true}
                           component={LoginComponent}
                />
                <AuthRoute path="/signUp"
                           exact={true}
                           component={SignUpComponent}
                />
                <ProtectedRoute path="/profile"
                                exact={true}
                                component={ProfileComponent}
                />
                <ProtectedRoute path="/cart"
                                exact={true}
                                component={CartComponent}
                />
                <ProtectedRoute path="/orders"
                                exact={true}
                                component={OrderComponent}
                />
                <ProtectedRoute path="/inventory"
                                exact={true}
                                component={InventoryComponent}
                />
                <ProtectedRoute path="/retail"
                                exact={true}
                                component={RetailComponent}
                />
                <FooterComponent/>
            </div>
        );
    }
}

export default HomePageContainer;
