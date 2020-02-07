import React from 'react';
import * as fakeNumbers from '@phuocng/fake-numbers';

import NumberType from '../constants/NumberType';

import CheckTab from './CheckTab';
import FakeTab from './FakeTab';

interface DetailsPageProps {
    numberType: NumberType;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ numberType }) => {
    const { fake, check } = fakeNumbers[numberType];

    return (
        <div>
            <div>Type: {numberType}</div>
            <FakeTab numberType={numberType} fake={fake} />
            <CheckTab numberType={numberType} check={check} />
        </div>
    );
};

export default DetailsPage;
