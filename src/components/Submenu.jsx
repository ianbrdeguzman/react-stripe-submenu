import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from './context';

const Submenu = () => {
    const { isSubmenuOpen, location, page } = useContext(AppContext);
    const container = useRef(null);

    useEffect(() => {
        const { center, top } = location;
        container.current.style.left = `${center}px`;
        container.current.style.top = `${top}px`;
    }, [location]);
    return (
        <aside
            className={isSubmenuOpen ? 'submenu show' : 'submenu'}
            ref={container}
        >
            <section>
                <h4>{page.page}</h4>
                <div
                    className={
                        page.links.length > 0
                            ? `submenu-center col-${page.links.length}`
                            : 'submenu-center'
                    }
                >
                    {page.links.map((link, index) => {
                        const { label, icon, url } = link;
                        return (
                            <a href={url} key={index}>
                                {icon}
                                {label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
};

export default Submenu;
