import React, { useState } from 'react';
import * as fakeNumbers from '@phuocng/fake-numbers';

import NumberType from '../constants/NumberType';

import CheckTab from './CheckTab';
import FakeTab from './FakeTab';

interface DetailsPageProps {
    numberType: NumberType;
}

interface TabProps {
    tabIndex: number;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ numberType }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { fake, check } = fakeNumbers[numberType];

    const Tab: React.FC<TabProps> = ({ tabIndex, children }) => {
        const isActive = tabIndex === activeTab;
        const click = () => setActiveTab(tabIndex);
        return (
            <div
                className={`border-b-4 cursor-pointer px-5 py-3 text-2xl ${isActive ? 'border-red-400 font-bold' : 'border-transparent font-light'}`}
                onClick={click}
            >
                {children}
            </div>
        );
    };

    return (
        <div>
            <div>Type: {numberType}</div>

            <div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Tab tabIndex={0}>
                        Fake
                    </Tab>
                    <Tab tabIndex={1}>
                        Check
                    </Tab>
                </div>
                <div className='border border-gray-400'>
                    { activeTab === 0 && <FakeTab numberType={numberType} fake={fake} /> }
                    { activeTab === 1 && <CheckTab numberType={numberType} check={check} /> }
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
