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
import Layout from './Layout';

const GuidePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Fake Numbers - Developer Guide</title>
            </Helmet>

            <h1 className='font-bold text-4xl my-16 text-center'>
                Developer Guide
            </h1>

            <h2 className='text-3xl mt-8'>1. Install</h2>
            <p className='py-2'>You can install the npm package:</p>
            <SampleCode
                code={`
npm install @phuocng/fake-numbers
`}
            />
            <p className='py-2'>or insert the UMD script to your page:</p>
            <SampleCode
                lang='html'
                code={`
<script src="/vendors/@phuocng/fake-numbers/umd/fake-numbers.min.js"></script>
`}
            />

            <h2 className='text-3xl mt-8'>2. Fake a number</h2>
            <blockquote className='border-l-2 border-black pl-2 my-2'>
                The following sample code generates a fake credit card number. You can replace <code>creditCard</code>
                with other namespace that represents other
                <Link className='border-b border-black' to='/numbers'>supported numbers</Link>.
            </blockquote>
            <p className='py-2'>— If you are using the npm package:</p>
            <SampleCode
                code={`
import { creditCard } from '@phuocng/fake-numbers';

// Fake a credit card number
const number = creditCard.fake();
`}
            />

            <p className='py-2'>— If you are using the UMD script:</p>
            <SampleCode
                code={`
// Fake a credit card number
const number = FakeNumbers.creditCard.fake();
`}
            />

            <h2 className='text-3xl mt-8'>3. Check a number</h2>
            <blockquote className='border-l-2 border-black pl-2 my-2'>
                The following sample code check if a given number is a valid credit card number.
                You can replace <code>creditCard</code> with other namespace that represents other
                <Link className='border-b border-black' to='/numbers'>supported numbers</Link>.
            </blockquote>
            <p className='py-2'>— If you are using the npm package:</p>
            <SampleCode
                code={`
import { creditCard } from '@phuocng/fake-numbers';

// Check a credit card number
const isValid = creditCard.check('given number').valid;
`}
            />

            <p className='py-2'>— If you are using the UMD script:</p>
            <SampleCode
                code={`
// Check a credit card number
const isValid = FakeNumbers.creditCard.check('given number').valid;
`}
            />
        </Layout>
    );
};

export default GuidePage;
