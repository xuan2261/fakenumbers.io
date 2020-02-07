import React from 'react';
import { Link } from 'react-router-dom';

import NumberType from '../constants/NumberType';

interface NumberCardProps {
    numberType: NumberType;
}

const NumberCard: React.FC<NumberCardProps> = ({ numberType }) => {
    return (
        <div>
            <Link to={`/numbers/${numberType}`}>
                {numberType}
            </Link>
        </div>
    );
};

export default NumberCard;
