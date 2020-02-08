/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
rootElement.hasChildNodes()
    ? hydrate(<App />, rootElement)
    : render(<App />, rootElement);
