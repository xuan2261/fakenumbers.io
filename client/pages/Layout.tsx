/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className='ml-auto mr-auto max-w-4xl'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
