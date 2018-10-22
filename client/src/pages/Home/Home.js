import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { default as Header } from "../../components/Header/index.js";
import { default as Footer } from "../../components/Footer/index.js";

import "./Home.css";

class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Home;