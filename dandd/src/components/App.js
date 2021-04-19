import React from 'react'
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext"
import Header from "./Header";
import OrderDetails from "./OrderDetails";
import Profile from "./Profile";
import Footer from "./Footer";
import Login from "./Login"
import Signup from './Signup';
import Dashboard from './Dashboard';
import CreateOrder from './CreateOrder';

function App() {
  return (

    <div className="App">
      <Router>
      <AuthProvider>
        <Header />

              <Switch>

                <Route path="/login" component={Login} />
                <Route exact path="/" component={Signup} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route path="/orderDetails/:order_id">
                    <OrderDetails />
                </Route>
                <Route path="/profile/:user_id">
                    <Profile />
                </Route>
                <Route path="/CreateOrder">
                  <CreateOrder />
                </Route>
              </Switch>

        <Footer />
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
