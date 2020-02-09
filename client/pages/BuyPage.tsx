/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import GumroadButton from '../components/GumroadButton';
import Layout from './Layout';

const BuyPage = () => {
    const GUMROAD_PRODUCT = 'fake-numbers';
    const GUMROAD_DEV_LICENSE_VARIANT = 'Developer license';
    const GUMROAD_ORG_LICENSE_VARIANT = 'Organization license';

    return (
        <Layout>
            <Helmet>
                <title>Fake Numbers - Purchase a License</title>
            </Helmet>

            <h1 className='font-bold text-2xl md:text-4xl mt-16 text-center'>
                Puchase a License
            </h1>
            <h3 className='font-light text-xl md:text-2xl mb-16 text-center'>Choose the right package to purchase</h3>

            <div className='md:flex justify-center'>
                <div className='border border-gray-400 rounded ml-auto mr-auto mb-8 text-center w-64'>
                    <div className='text-2xl md:text-3xl font-bold p-3 border-b border-gray-400'>Developer</div>
                    <p className='text-3xl md:text-5xl my-4'>24.99$</p>

                    <div className='my-6'>
                        <GumroadButton productName={GUMROAD_PRODUCT} variant={GUMROAD_DEV_LICENSE_VARIANT} />
                    </div>

                    <ul className='border-t border-gray-400'>
                        <li className='border-b border-gray-400 p-3'>1 user</li>
                        <li className='p-3'>Free lifetime upgrade</li>
                    </ul>
                </div>

                <div className='border border-gray-400 rounded ml-auto mr-auto mb-8 text-center w-64'>
                    <div className='text-2xl md:text-3xl font-bold p-3 border-b border-gray-400'>Organization</div>
                    <p className='text-3xl md:text-5xl my-4'>74.99$</p>

                    <div className='my-6'>
                        <GumroadButton productName={GUMROAD_PRODUCT} variant={GUMROAD_ORG_LICENSE_VARIANT} />
                    </div>

                    <ul className='border-t border-gray-400'>
                        <li className='border-b border-gray-400 p-3'>Unlimited users</li>
                        <li className='p-3'>Free lifetime upgrade</li>
                    </ul>
                </div>
            </div>

            <div className='text-center my-8'>
                All transactions are processed on GumRoad through an encrypted HTTP Secure connection
            </div>
        </Layout>
    );
};

export default BuyPage;
