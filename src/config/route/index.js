import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import SelectLanguage from "../../pages/selectlanguage"
import Home from "../../pages/home"
import Details from "../../pages/details";

const Routers = () =>{
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/selectlanguage" component={SelectLanguage}/>
                    <Route exact path="/details" component={Details}/>
                </Switch>
            </div>
        </Router>
    );
}

export default Routers;
