import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import About from "../../pages/about"
import Home from "../../pages/home"
import Details from "../../pages/details";

const Routers = () =>{
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/details" component={Details}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Routers;
