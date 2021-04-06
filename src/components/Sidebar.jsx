import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { AppContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useContext(AppContext);
    return (
        <div
            className={
                isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }
        >
            <aside className='sidebar'>
                <button onClick={toggleSidebar} className='close-btn'>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className='sidebar-sublinks'>
                                    {links.map((link, index) => {
                                        const { icon, label, url } = link;
                                        return (
                                            <a href={url} key={index}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
