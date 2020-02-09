/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

interface GumroadButtonProps {
    productName: string;
    variant?: string;
}

const GumroadButton: React.FC<GumroadButtonProps> = ({ productName, variant }) => {
    const productUrl = `https://gum.co/${productName}`;
    const url = variant ? `${productUrl}?variant=${escape(variant)}` : productUrl;

    return (
        <a
            className="gumroad-button no-underline"
            href={url}
            target="_blank"
            data-gumroad-single-product="true"
        >
            Purchase
        </a>
    );
};

export default GumroadButton;
