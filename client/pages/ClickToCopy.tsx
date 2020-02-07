import React from 'react';

const ClickToCopy: React.FC<{}> = ({ children }) => {
    const copy = () => document.execCommand('copy');

    return (
        <div style={{ userSelect: 'all' }} onClick={copy}>
            {children}
        </div>
    );
};

export default ClickToCopy;
