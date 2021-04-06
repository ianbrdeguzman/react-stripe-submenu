import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import sublinks from './data';
import { AppContext } from './context';

const Navbar = () => {
    const { toggleSidebar, openSubmenu, closeSubmenu } = useContext(AppContext);

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };
    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img
                        src='https://raw.githubusercontent.com/john-smilga/react-projects/ca901d0954cf72ebbae6318816eeb018506b8912/13-stripe-submenus/setup/src/images/logo.svg'
                        alt='Logo'
                        className='nav-logo'
                    />
                    <button onClick={toggleSidebar} className='btn toggle-btn'>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    {sublinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <button
                                    onMouseOver={displaySubmenu}
                                    className='link-btn'
                                >
                                    {link.page}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button className='btn signin-btn'>sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
