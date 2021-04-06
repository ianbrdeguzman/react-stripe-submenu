import React, { createContext, useState } from 'react';
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((p) => p.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };
    return (
        <>
            <AppContext.Provider
                value={{
                    isSidebarOpen,
                    isSubmenuOpen,
                    toggleSidebar,
                    openSubmenu,
                    closeSubmenu,
                    location,
                    page,
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    );
};

export default AppProvider;

export { AppContext };
