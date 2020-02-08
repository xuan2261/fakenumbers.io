import React from 'react';

import NumberCard from '../components/NumberCard';
import NumberType from '../constants/NumberType';

const NumbersPage = () => {
    const types = Object.values(NumberType);

    return (
        <div>
            {
                types.map((type) => {
                    return (
                        <NumberCard
                            key={type}
                            numberType={type}
                        />
                    );
                })
            }
        </div>
    );
};

export default NumbersPage;
