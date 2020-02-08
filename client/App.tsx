/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch as RouteSwitch } from 'react-router-dom';

import './index.css';

import NumberType from './constants/NumberType';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';

const App = () => {
    return (
        <Router>
            <RouteSwitch>
                <Route exact={true} path='/'><HomePage /></Route>
                <Route exact={true} path='/numbers'><ListingPage /></Route>
                <Route
                    path='/numbers/:numberType'
                    render={(props) => <DetailsPage numberType={props.match.params.numberType as NumberType} />} // tslint:disable-line
                />
            </RouteSwitch>
        </Router>
    );
};

export default App;
