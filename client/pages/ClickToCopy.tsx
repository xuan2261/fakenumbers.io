import React from 'react';

const ClickToCopy: React.FC<{}> = ({ children }) => {
    const copy = () => document.execCommand('copy');

    return (
        <div className='select-all text-5xl' onClick={copy}>
            {children}
        </div>
    );
};

export default ClickToCopy;
