import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import OrderDetails from "./OrderDetails";
import Profile from "./Profile";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/orderDetails/:order_id">
              <OrderDetails />
            </Route>
            <Route path="/profile/:user_id">
              <Profile />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
