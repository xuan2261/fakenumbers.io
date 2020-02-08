import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC<{}> = () => {
    const zigZag = "url(\"data:image/svg+xml;utf-8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='9px' height='6px' viewBox='0 0 9 6'><polygon opacity='1' points='4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0' /></svg>\")";

    return (
        <>
        <div
            className='bg-repeat-x w-full h-2 my-12'
            style={{ backgroundImage: zigZag }}
        />
        <div className='ml-auto mr-auto w-3/4 mb-16'>
            <div className='flex'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-light py-2'>FakeNumbers</h3>
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
                    <h3 className='text-2xl font-light py-2'>Products</h3>
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
                    <h3 className='text-2xl font-light py-2'>Follow me</h3>
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
                <div>This site is <a className="border-b border-black" href="https://github.com/phuoc-ng/fakenumbers.io" rel="noopener noreferrer" target="_blank">open source</a></div>
            </div>
        </div>
        </>
    );
};

export default Footer;
