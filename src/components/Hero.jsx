import React, { useContext } from 'react';
import { AppContext } from './context';

const Hero = () => {
    const { closeSubmenu } = useContext(AppContext);
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>Payments infrastructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes—from startups to
                        Fortune 500s—use Stripe’s software and APIs to accept
                        payments, send payouts, and manage their businesses
                        online.
                    </p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img
                        src='https://raw.githubusercontent.com/john-smilga/react-projects/ca901d0954cf72ebbae6318816eeb018506b8912/13-stripe-submenus/setup/src/images/phone.svg'
                        alt='phone'
                        className='phone-img'
                    />
                </article>
            </div>
        </section>
    );
};

export default Hero;
