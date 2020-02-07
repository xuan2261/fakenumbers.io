import React, { useState, ChangeEvent } from 'react';
import { CheckResult } from '@phuocng/fake-numbers';

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
                onChange={changeNumber} />
            <div>
                { value && (check(value).valid ? 'Valid' : ' Invalid') }
            </div>
        </div>
    );
};

export default CheckTab;
