

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import UberUns from './components/UberUns';
import Programme from './pages/Programme';
import Gastfamilie from './pages/Gastfamilie';
import Informationen from './pages/Informationen';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import BewerbungStudent from './pages/BewerbungStudent';
import BewerbungGastfamilie from './pages/BewerbungGastfamilie';

const Home = React.lazy(() => import('./pages/Home'));

const App = () => (
  <Router>
    <Header />
    <div className="pt-20 p-5">
      <Suspense fallback={<div className="text-center text-xl">Loading...</div>}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uber-uns" element={<UberUns />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/gastfamilie" element={<Gastfamilie />} />
            <Route path="/informationen" element={<Informationen />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/bewerbung-als-student" element={<BewerbungStudent />} />
            <Route path="/bewerbung-als-gastfamilie" element={<BewerbungGastfamilie />} />
            <Route path="/" element={<Informationen />} />
          </Routes>
        </motion.div>
      </Suspense>
    </div>
    <Footer />
  </Router>
);

export default App;