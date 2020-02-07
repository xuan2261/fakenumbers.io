import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import NumbersPage from './pages/NumbersPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route exact={true} path='/numbers'><NumbersPage /></Route>
            </RouteSwitch>
        </Router>
    );
};

export default App;
