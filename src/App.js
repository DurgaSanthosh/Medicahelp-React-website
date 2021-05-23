import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contact";
import Booking from "./Booking";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contact" component={Contacts} />
        <Route exact path="/booking" component={Booking} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
