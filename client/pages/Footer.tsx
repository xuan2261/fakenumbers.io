/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';
import { Link } from 'react-router-dom';

import Separator from '../components/Separator';

const Footer: React.FC<{}> = () => {
    return (
        <>
        <div className='my-12'><Separator /></div>
        <div className='ml-auto mr-auto max-w-4xl mb-16 px-2 lg:px-0'>
            <div className='md:flex'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold py-2'>FakeNumbers</h3>
                    <ul>
                        <li><Link to='/numbers'>Supported Numbers</Link></li>
                        <li><Link to='/license'>License</Link></li>
                        <li>
                            <a
                                href="https://github.com/phuoc-ng/fake-numbers"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold py-2'>Products</h3>
                    <ul>
                        <li>
                            <a
                                href="https://blur.page"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="BlurPage - a browser extension to hide sensitive element on page"
                            >
                                Blur Page
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://csslayout.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                            >
                                CSS Layout
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://formvalidation.io"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="FormValidation - the best validation library for JavaScript"
                            >
                                Form Validation
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://react-pdf-viewer.dev"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="React PDF Viewer - a PDF viewer made for React"
                            >
                                React PDF Viewer
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold py-2'>Follow me</h3>
                    <ul>
                        <li>
                            <a
                                href="https://twitter.com/nghuuphuoc"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                twitter/nghuuphuoc
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://dev.to/phuocng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                dev.to/phuocng
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/phuoc-ng"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                            >
                                github/phuoc-ng
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='pt-4'>
                <div>© 2020 Nguyen Huu Phuoc. All rights reserved.</div>
                <div>
                    This site
                    is <a className="border-b border-black" href="https://github.com/phuoc-ng/fakenumbers.io" rel="noopener noreferrer" target="_blank">open source</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;
