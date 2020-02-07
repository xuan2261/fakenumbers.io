import React from 'react';

import NumberType from '../constants/NumberType';

interface NumberCardProps {
    numberType: NumberType;
}

const NumberCard: React.FC<NumberCardProps> = ({ numberType }) => {
    return (
        <div>{numberType}</div>
    );
};

export default NumberCard;
