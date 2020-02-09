/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as fakeNumbers from '@phuocng/fake-numbers';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import NumberMetaMap from '../constants/NumberMetaMap';
import NumberType from '../constants/NumberType';
import CheckTab from './CheckTab';
import FakeTab from './FakeTab';
import Layout from './Layout';

interface DetailsPageProps {
    numberType: NumberType;
}

interface TabProps {
    tabIndex: number;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ numberType }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { fake, check } = fakeNumbers[numberType];
    const meta = NumberMetaMap.get(numberType);

    const types = Object.values(NumberType);
    const index = types.indexOf(numberType);
    const numTypes = types.length;

    const Tab: React.FC<TabProps> = ({ tabIndex, children }) => {
        const isActive = tabIndex === activeTab;
        const click = () => setActiveTab(tabIndex);
        return (
            <div
                className={`border-t-4 cursor-pointer px-8 py-1 text-2xl ${isActive ? 'border-gray-900 font-bold' : 'border-transparent font-light'}`}
                onClick={click}
            >
                {children}
            </div>
        );
    };

    return (
        <Layout>
            <Helmet>
                <title>Fake Numbers - Fake a {meta.name} number</title>
                <meta name='description' content={`Fake a ${meta.name} (${meta.description}) number`} />
            </Helmet>

            <h1 className='font-bold text-2xl md:text-4xl mt-16 text-center'>
                Fake a {meta.name} number
            </h1>
            <h3 className='font-light text-xl md:text-2xl mb-16 text-center'>{meta.description}</h3>

            <div className='flex items-center justify-center'>
                <Tab tabIndex={0}>
                    Fake
                </Tab>
                <Tab tabIndex={1}>
                    Check
                </Tab>
            </div>
            <div className='border border-gray-400'>
                {activeTab === 0 && <FakeTab numberType={numberType} fake={fake} />}
                {activeTab === 1 && <CheckTab numberType={numberType} check={check} />}
            </div>
            <div className='flex justify-between my-8'>
                {index > 0 && (
                    <Link
                        className='flex-1'
                        to={`/numbers/${types[index - 1]}`}
                        title={NumberMetaMap.get(types[index - 1]).description}
                    >
                        <div className='text-2xl'>← {types[index - 1]}</div>
                        <div>{NumberMetaMap.get(types[index - 1]).description}</div>
                    </Link>
                )}
                {index < numTypes - 1 && (
                    <Link
                        className='flex-1 text-right'
                        title={NumberMetaMap.get(types[index + 1]).description}
                        to={`/numbers/${types[index + 1]}`}
                    >
                        <div className='text-2xl'>{types[index + 1]} →</div>
                        <div>{NumberMetaMap.get(types[index + 1]).description}</div>
                    </Link>
                )}
            </div>
        </Layout>
    );
};

export default DetailsPage;
