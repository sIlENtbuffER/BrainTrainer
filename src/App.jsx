import React from 'react';
import DualNBack from './modules/dualnback/DualNBack';
// import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx';

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Brain Trainner</h1>
        <DualNBack />
      </main>

      {/* <Footer /> */}
        <div className="bg-emerald-500 text-center text-white p-2">
            If you can see a green bar -- Tailwind is working
        </div>
    </div>
    );
}

export default App;