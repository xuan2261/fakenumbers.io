/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { CheckResult } from '@phuocng/fake-numbers';
import React, { useEffect, useState } from 'react';

import SampleCode from '../components/SampleCode';
import Separator from '../components/Separator';
import NumberType from '../constants/NumberType';

interface CheckTabProps {
    numberType: NumberType;
    check: (value: string) => CheckResult<any>;
}

const CheckTab: React.FC<CheckTabProps> = ({ check, numberType }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue('');
    }, [numberType]);
    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div>
            <div className='flex flex-col items-center py-24'>
                <input
                    className='border border-gray-400 p-4 text-3xl w-2/3'
                    placeholder='Type the number'
                    value={value}
                    onChange={changeNumber}
                />
                { value && (
                    check(value).valid
                        ? <div className='text-2xl md:text-3xl py-3 text-green-400'>Valid</div>
                        : <div className='text-2xl md:text-3xl py-3 text-red-800'>Invalid</div>
                )}
            </div>

            <section>
                <Separator>JS API</Separator>
                <div className='p-4'>
                    <SampleCode
                        code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Check a number
const isValid = ${numberType}.check('given number').valid;
`}
                    />
                </div>
            </section>

            <section>
                <Separator>or</Separator>
                <div className='p-4'>
                    <SampleCode
                        lang='html'
                        code={`
<script src="/vendors/@phuocng/fake-numbers/umd/fake-numbers.min.js"></script>

<script>
// Check a number
const isValid = FakeNumbers.${numberType}.check('given number').valid;
</script>
`}
                    />
                </div>
            </section>
        </div>
    );
};

export default CheckTab;
