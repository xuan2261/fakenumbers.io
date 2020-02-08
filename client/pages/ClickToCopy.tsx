import React from 'react';

interface ClickToCopyProps {
    onCopied?: () => void;
}

const ClickToCopy: React.FC<ClickToCopyProps> = ({ children, onCopied }) => {
    const copy = () => {
        document.execCommand('copy');
        onCopied();
    }

    return (
        <div className='select-all text-5xl' onClick={copy}>
            {children}
        </div>
    );
};

export default ClickToCopy;
