import React, { useEffect } from 'react';

import Footer from './Footer';
import Github from './Github';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
