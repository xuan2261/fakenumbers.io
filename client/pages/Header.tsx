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
            <div className='ml-auto mr-auto max-w-4xl flex items-center py-4 px-2 lg:px-0'>
                <div className='text-2xl'><Link to='/'>FakeNumbers</Link></div>
                <div className='ml-auto flex items-center'>
                    <div className='px-2'><Link to='/numbers'>Numbers</Link></div>
                    <div className='px-2'><Link to='/guide'>Guide</Link></div>
                    <div className='px-2'><Link to='/license'>License</Link></div>
                </div>
            </div>
            <Separator />
        </>
    );
};

export default Header;
