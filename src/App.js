import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';
import AppProvider from './components/context';

function App() {
    return (
        <>
            <AppProvider>
                <Navbar />
                <Sidebar />
                <Hero />
                <Submenu />
            </AppProvider>
        </>
    );
}

export default App;
