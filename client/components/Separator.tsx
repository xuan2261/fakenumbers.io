/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

const Separator: React.FC<{}> = ({ children }) => {
    const zigZag = "url('/assets/zig-zag.svg')";

    return (
        <div
            className={`bg-repeat-x bg-center w-full text-center ${children ? '' : 'h-2'}`}
            style={{ backgroundImage: zigZag }}
        >
            { children && (
            <span className='bg-white px-4'>
                {children}
            </span>
            )}
        </div>
    );
};

export default Separator;
