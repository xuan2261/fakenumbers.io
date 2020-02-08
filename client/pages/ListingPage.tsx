import React from 'react';

import NumberCard from '../components/NumberCard';
import NumberType from '../constants/NumberType';

import Layout from './Layout';

const ListingPage = () => {
    const types = Object.values(NumberType);

    return (
        <Layout>
            <h1 className='text-6xl my-16 text-center'>
                Support {Object.values(NumberType).length} types of number
            </h1>
            <div className='flex flex-wrap' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
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
        </Layout>
    );
};

export default ListingPage;
