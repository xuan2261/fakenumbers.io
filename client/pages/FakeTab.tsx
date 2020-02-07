import React, { useState } from 'react';

import SampleCode from '../components/SampleCode';
import NumberType from '../constants/NumberType';
import ClickToCopy from './ClickToCopy';

interface FakeTabProps {
    numberType: NumberType;
    fake: () => string;
}

const FakeTab: React.FC<FakeTabProps> = ({ fake, numberType }) => {
    const [value, setValue] = useState(fake());
    const generate = () => setValue(fake());

    return (
        <div>
            <ClickToCopy>{value}</ClickToCopy>
            <button className="border" onClick={generate}>Fake</button>

            <div>API</div>
            <SampleCode
                code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Fake a number
const number = ${numberType}.fake();
`}
            />
        </div>
    );
};

export default FakeTab;
