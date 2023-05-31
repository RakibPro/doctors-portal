import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer
            className='p-10'
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <ScrollToTop
                smooth
                top='500'
                color='#19D3AE'
                height='50'
                width='50'
                viewBox='0 0 512 512'
                svgPath='M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z'
                style={{ background: 'transparent', boxShadow: 'none' }}
            />
            <div className='footer'>
                <div>
                    <span className='footer-title'>Services</span>
                    <Link to='/' className='link link-hover'>
                        Emergency Checkup
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Monthly Checkup
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Weekly Checkup
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Deep Checkup
                    </Link>
                </div>
                <div>
                    <span className='footer-title'>ORAL HEALTH</span>
                    <Link to='/' className='link link-hover'>
                        Fluoride Treatment
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Cavity Filling
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Teeth Whitening
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Press kit
                    </Link>
                </div>
                <div>
                    <span className='footer-title'>Legal</span>
                    <Link to='/' className='link link-hover'>
                        Terms of use
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Privacy policy
                    </Link>
                    <Link to='/' className='link link-hover'>
                        Cookie policy
                    </Link>
                </div>
            </div>
            <div className='text-center text-black mt-14'>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
