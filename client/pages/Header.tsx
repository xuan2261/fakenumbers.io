/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Separator from '../components/Separator';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((v) => !v);

    return (
        <>
            <div className='ml-auto mr-auto max-w-4xl flex items-center py-4 px-2 lg:px-0'>
                <div className='text-2xl'><Link to='/'>FakeNumbers</Link></div>
                <div className='ml-auto flex items-center'>
                    <div className='items-center hidden sm:flex'>
                        <div className='px-2'><Link to='/numbers'>Numbers</Link></div>
                        <div className='px-2'><Link to='/guide'>Guide</Link></div>
                        <div className='px-2'><Link to='/license'>License</Link></div>
                        <div className='px-2'><Link to='/buy'>Buy</Link></div>
                    </div>
                    <div className='block sm:hidden'>
                        <button onClick={toggleMenu}>
                            <svg
                                height={32}
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='rgb(0, 0, 0)'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='1'
                                width={32}
                            >
                                <path d={`M21,7H3 M21,12H3 M21,17H3`} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Separator />
            {showMenu && (
                <div className='fixed top-0 left-0 w-full h-full z-10 bg-white'>
                    <div className='p-3 text-right'>
                        <button onClick={toggleMenu}>
                            <svg
                                height={32}
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='rgb(0, 0, 0)'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='1'
                                width={32}
                            >
                                <path d={`M0.5,0.499l23,23 M23.5,0.499l-23,23`} />
                            </svg>
                        </button>
                    </div>
                    <ul className='text-3xl text-center'>
                        <li className='border-b border-gray-400'>
                            <Link className='block py-4' to='/numbers'>Numbers</Link>
                        </li>
                        <li className='border-b border-gray-400'>
                            <Link className='block py-4' to='/guide'>Guide</Link>
                        </li>
                        <li className='border-b border-gray-400'>
                            <Link className='block py-4' to='/license'>License</Link>
                        </li>
                        <li className='border-b border-gray-400'>
                            <Link className='block py-4' to='/buy'>Buy</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
