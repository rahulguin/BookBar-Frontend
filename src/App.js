// import React from 'react';
// import './App.css';
// import HomePageContainer from './container/HomePageContainer'
//
// const App = () =>
//     <div>
//         <HomePageContainer/>
//     </div>
//
// export default App;



import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import SignUpComponent from "./components/register/SignUpComponent";
import { AuthRoute, ProtectedRoute } from "./util/route";

export default () => (
    <>
        <Route exact path="/" component={Welcome} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
    </>
);
