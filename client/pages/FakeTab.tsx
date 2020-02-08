import React, { useState } from 'react';

import SampleCode from '../components/SampleCode';
import Separator from '../components/Separator';
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
            <div className='flex flex-col items-center py-32'>
                <div className='border-4 border-gray-400 p-4 rounded-lg'>
                    <ClickToCopy>{value}</ClickToCopy>
                </div>
                <button
                    className='bg-green-400 border-none font-light my-8 px-4 py-3 rounded-lg text-4xl text-white'
                    onClick={generate}
                >
                    Fake
                </button>
            </div>

            <Separator>
                <div className='text-2xl'>API</div>
            </Separator>
            <div className='p-6'>
                <SampleCode
                    code={`
import { ${numberType} } from '@phuocng/fake-numbers';

// Fake a number
const number = ${numberType}.fake();
`}
                />
            </div>
        </div>
    );
};

export default FakeTab;
