import React, { useState, ChangeEvent } from 'react';
import { CheckResult } from '@phuocng/fake-numbers';

import SampleCode from '../components/SampleCode';
import Separator from '../components/Separator';
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
            <div className='flex flex-col items-center py-32'>
                <input
                    className='border-4 border-gray-400 p-4 rounded-lg text-5xl w-1/2'
                    placeholder='Type the number'
                    value={value}
                    onChange={changeNumber}
                />
                { value && (
                    check(value).valid
                        ? <div className='my-8 text-4xl px-4 py-3 bg-green-400 text-white'>Valid</div>
                        : <div className='my-8 text-4xl px-4 py-3 bg-red-800 text-white'>Invalid</div>
                )}
            </div>

            <Separator>
                <div className='text-2xl'>API</div>
            </Separator>
            <div className='p-6'>
                <SampleCode
                    code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Check a number
const isValid = ${numberType}.check('given number').valid;
`}
                />
            </div>
        </div>
    );
};

export default CheckTab;
