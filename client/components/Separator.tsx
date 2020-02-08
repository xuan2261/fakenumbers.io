/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

const Separator: React.FC<{}> = () => {
    const zigZag = "url(\"data:image/svg+xml;utf-8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='9px' height='6px' viewBox='0 0 9 6'><polygon opacity='1' points='4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0' /></svg>\")";

    return (
        <div
            className='bg-repeat-x w-full h-2'
            style={{ backgroundImage: zigZag }}
        />
    );
};

export default Separator;
