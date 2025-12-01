import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import PrivacyNotice from './components/Layout/PrivacyNotice';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import Transparency from './pages/Transparency';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <ScrollToTop />
      <div className="sticky top-0 z-50 w-full">
        <PrivacyNotice />
        <Navbar />
      </div>
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transparency" element={<Transparency />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
