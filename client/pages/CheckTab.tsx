import React, { useState, ChangeEvent } from 'react';
import { CheckResult } from '@phuocng/fake-numbers';

import SampleCode from '../components/SampleCode';
import Separator from '../components/Separator';
import NumberType from '../constants/NumberType';

/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

interface CheckTabProps {
    numberType: NumberType;
    check: (value: string) => CheckResult<any>;
}

const CheckTab: React.FC<CheckTabProps> = ({ check, numberType }) => {
    const [value, setValue] = useState('');
    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div>
            <div className='p-4'>
                <SampleCode
                    code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Check a number
const isValid = ${numberType}.check('given number').valid;
`}
                />
            </div>
            <div className='flex flex-col items-center py-24'>
                <input
                    className='border border-gray-400 p-4 text-3xl w-2/3'
                    placeholder='Type the number'
                    value={value}
                    onChange={changeNumber}
                />
                { value && (
                    check(value).valid
                        ? <div className='text-3xl py-3 text-green-400'>Valid</div>
                        : <div className='text-3xl py-3 text-red-800'>Invalid</div>
                )}
            </div>
        </div>
    );
};

export default CheckTab;
