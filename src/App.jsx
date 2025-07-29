import React from 'react';
import DualNBack from './modules/dualnback/DualNBack';
import './components/Header.jsx'
import './components/Footer.jsx'
import Header from './components/Header.jsx';

function App() {
    return (
        <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
            <h1 className = "text-3xl font-bold mb-4"> Brain Trainner</h1>
            <Header/>
            <DualNBack />
        </div>
    );
}

export default App;