import React, { useEffect } from 'react';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='ml-auto mr-auto w-3/4'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
