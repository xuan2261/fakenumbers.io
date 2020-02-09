/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import NumberCard from '../components/NumberCard';
import NumberMetaMap from '../constants/NumberMetaMap';
import NumberType from '../constants/NumberType';
import Layout from './Layout';

const ListingPage = () => {
    const [keyword, setKeyword] = useState('');
    const allTypes = Object.values(NumberType);
    const filter = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

    const types = (keyword === '')
                ? allTypes
                : allTypes.filter((v) => {
                    const { description, name } = NumberMetaMap.get(v);
                    const lookFor = keyword.toLowerCase();
                    return name.toLowerCase().includes(lookFor) || description.toLowerCase().includes(lookFor);
                });

    return (
        <Layout>
            <Helmet>
                <title>Fake Numbers - Supported numbers</title>
            </Helmet>

            <h1 className='font-bold text-2xl md:text-4xl mt-16 text-center'>
                Support {Object.values(NumberType).length} types of number
            </h1>
            <h3 className='font-light text-xl md:text-2xl mb-16 text-center'>a lot more to come</h3>
            <div className='flex justify-center mb-8'>
                <input
                    className='border border-gray-400 text-2xl p-2 md:p-4 rounded w-1/2 sm:w-1/3'
                    placeholder='Filter'
                    onChange={filter}
                />
            </div>
            {
                types.length === 0
                ? (
                    <div className='flex items-center justify-center text-2xl'>Couldn't found any supported number</div>
                )
                : (
                    <div className='flex flex-wrap -ml-2 -mr-2'>
                        {
                            types.map((type) => {
                                return (
                                    <NumberCard
                                        key={type}
                                        numberType={type}
                                    />
                                );
                            })
                        }
                    </div>
                )
            }
        </Layout>
    );
};

export default ListingPage;
