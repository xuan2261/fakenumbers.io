/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Separator from '../components/Separator';

const Header = () => {
    return (
        <>
            <div className='ml-auto mr-auto max-w-4xl flex items-center py-4'>
                <div className='text-2xl'><Link to='/'>FakeNumbers</Link></div>
                <ul className='ml-auto flex items-center'>
                    <li className='px-2'><Link to='/numbers'>Supported Numbers</Link></li>
                    <li className='px-2'><Link to='/guide'>Guide</Link></li>
                    <li className='px-2'><Link to='/license'>License</Link></li>
                </ul>
            </div>
            <Separator />
        </>
    );
};

export default Header;
