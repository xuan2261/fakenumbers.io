/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

interface ClickToCopyProps {
    onCopied?: () => void;
}

const ClickToCopy: React.FC<ClickToCopyProps> = ({ children, onCopied }) => {
    const copy = () => {
        document.execCommand('copy');
        onCopied();
    };

    return (
        <div className='cursor-pointer select-all text-3xl p-4 bg-gray-200 border border-gray-400' onClick={copy}>
            {children}
        </div>
    );
};

export default ClickToCopy;
