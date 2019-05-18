import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import ApplianceOne from './pages/ApplianceOne';
import ApplianceTwo from './pages/ApplianceTwo';
import ApplianceThree from './pages/ApplianceThree';
import ApplianceFour from './pages/ApplianceFour';
import ApplianceFive from './pages/ApplianceFive';
import Reccomendations from './pages/Reccomendations';
import Theme from 'zero-component-library/src/components/Theme';

ReactDOM.render((
  <Router>
    <Theme>
      <div>    
        <Route path="/" exact component={App} />
        <Route path="/home-1" exact component={HomeOne} />
        <Route path="/home-2" exact component={HomeTwo} />
        <Route path="/appliance-1" exact component={ApplianceOne} />
        <Route path="/appliance-2" exact component={ApplianceTwo} />
        <Route path="/appliance-3" exact component={ApplianceThree} />
        <Route path="/appliance-4" exact component={ApplianceFour} />
        <Route path="/appliance-5" exact component={ApplianceFive} />
        <Route path="/reccomendations" exact component={Reccomendations} />
      </div>
    </Theme>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
