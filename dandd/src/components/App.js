import React from 'react'
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext"
import Header from "./Header";
import OrderDetails from "./OrderDetails";
import Footer from "./Footer";
import Login from "./Login"
import Signup from './Signup';
import Dashboard from './Dashboard'

function App() {
  return (

    <div className="App">
      <Router>
      <AuthProvider>
        <Header />
        <Container className="d-flex align-items-center justify-content-center"
                   style={{ minHeight: "80vh" }}>
          <div className="w-100" style={{ maxWidth: "300px" }}>
              <Switch>
                <Route path="/orderDetails/:order_id">
                    <OrderDetails />
                </Route>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Signup} />
                <Route exact path="/Dashboard" component={Dashboard} />
              </Switch>
          </div>
          </Container>
        <Footer />
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
