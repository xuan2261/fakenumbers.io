import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import SampleCode from '../components/SampleCode';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Fake Numbers - Generate fake numbers</title>
                <meta name="description" content="Generate fake numbers" />
            </Helmet>
            <h1 className="font-bold mt-48 mb-12 text-5xl text-center">Fake a number. Check a number.</h1>
            <div className="flex flex-column justify-center">
                <div className="shadow-2xl">
                    <SampleCode code={`
import { creditCard } from '@phuocng/fake-numbers';

// Fake a credit card number
const creditCardNumber = creditCard.fake();

// Check a credit card number
creditCard.check(creditCardNumber).valid; // true
`}/>
                </div>

                <Link
                    to="/numbers"
                    className='text-2xl'
                >
                    Supported numbers
                </Link>
            </div>
        </>
    );
};

export default HomePage;
