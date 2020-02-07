import React from 'react';

import NumberType from '../constants/NumberType';

interface DetailsPageProps {
    numberType: NumberType;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ numberType }) => {
    return (
        <div>{numberType}</div>
    );
};

export default DetailsPage;
