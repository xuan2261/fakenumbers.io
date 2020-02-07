import React, { useState } from 'react';

import NumberType from '../constants/NumberType';

interface FakeTabProps {
    numberType: NumberType;
    fake: () => string;
}

const FakeTab: React.FC<FakeTabProps> = ({ fake, numberType }) => {
    const [value, setValue] = useState(fake());
    const generate = () => setValue(fake());

    return (
        <div>
            <div>{value}</div>
            <button className="border" onClick={generate}>Fake</button>
        </div>
    );
};

export default FakeTab;
