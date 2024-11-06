import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CelticCross from './pages/readings/CelticCross';
import StarSpread from './pages/readings/StarSpread';
import LoveReading from './pages/readings/LoveReading';
import TimeReading from './pages/readings/TimeReading';
import YesNo from './pages/readings/YesNo';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celtic-cross" element={<CelticCross />} />
            <Route path="/star-spread" element={<StarSpread />} />
            <Route path="/love-reading" element={<LoveReading />} />
            <Route path="/time-reading" element={<TimeReading />} />
            <Route path="/yes-no" element={<YesNo />} />
          </Routes>
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}

export default App;