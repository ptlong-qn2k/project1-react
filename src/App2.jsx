import React from "react";
import "./App.css";

import Navbar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";

export default function App2() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/products" component={Products} />
                </Switch>
            </Router>
        </>
    );
}
