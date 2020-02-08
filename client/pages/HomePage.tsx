/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import SampleCode from '../components/SampleCode';
import Layout from'./Layout';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Fake Numbers - Generate fake numbers</title>
                <meta name='description' content='Generate fake numbers' />
            </Helmet>
            
            <h1 className='font-bold mt-32 text-5xl text-center'>Fake a number. Check a number.</h1>
            <h3 className='font-light mb-16 text-3xl text-center'>available as JS libary and online tool</h3>

            <div className='flex justify-center'>
                <div className='border border-gray-400 shadow-2xl'>
                    <SampleCode code={`
import { creditCard } from '@phuocng/fake-numbers';

// Fake a credit card number
const creditCardNumber = creditCard.fake();

// Check a credit card number
creditCard.check(creditCardNumber).valid; // true
`}/>
                </div>
            </div>

            <div className='text-center mt-12 mb-32'>
                <Link
                    to='/numbers'
                    className='text-white bg-black px-4 py-3 text-2xl'
                >
                    See Supported Numbers
                </Link>
            </div>
        </Layout>
    );
};

export default HomePage;
