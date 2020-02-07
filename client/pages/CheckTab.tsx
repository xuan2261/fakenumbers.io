import React, { useState, ChangeEvent } from 'react';
import { CheckResult } from '@phuocng/fake-numbers';

import SampleCode from '../components/SampleCode';
import NumberType from '../constants/NumberType';

interface CheckTabProps {
    numberType: NumberType;
    check: (value: string) => CheckResult<any>;
}

const CheckTab: React.FC<CheckTabProps> = ({ check, numberType }) => {
    const [value, setValue] = useState('');
    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div>
            <input
                className="border"
                placeholder="Type the number"
                value={value}
                onChange={changeNumber}
            />
            <div>
                { value && (check(value).valid ? 'Valid' : ' Invalid') }
            </div>

            <div>API</div>
            <SampleCode
                code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Check a number
const isValid = ${numberType}.check('given number').valid;
`}
            />
        </div>
    );
};

export default CheckTab;
