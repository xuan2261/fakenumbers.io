/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

const Separator: React.FC<{}> = ({ children }) => {
    return (
        <div className='flex items-center relative'>
            <div
                className='absolute bg-white px-4'
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {children}
            </div>
            <div
                className='border-b border-gray-400 w-full'
                style={{
                    height: '1px',
                }}
            />
        </div>
    );
};

export default Separator;
