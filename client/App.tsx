import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import NumberType from './constants/NumberType';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import NumbersPage from './pages/NumbersPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route exact={true} path='/numbers'><NumbersPage /></Route>
                <Route
                    path='/numbers/:numberType'
                    render={(props) => <DetailsPage numberType={props.match.params.numberType as NumberType} />} // tslint:disable-line
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
