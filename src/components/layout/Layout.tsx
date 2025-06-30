import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{
          background: 'radial-gradient(circle,rgb(0, 31, 31) 0%, #12192C 60%, #0A0E18 100%)'
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 relative flex items-center justify-center mb-4">
            <span className="absolute w-full h-full rounded-full border-4 border-[#08C2C1] border-t-transparent animate-spin"></span>
            <span className="absolute w-10 h-10 rounded-full border-2 border-[#fff3] border-t-transparent animate-spin-slow"></span>
            <span className="absolute w-6 h-6 rounded-full bg-[#08C2C1] opacity-80 animate-pulse"></span>
          </div>
          <h2 className="text-2xl text-white font-semibold tracking-wide drop-shadow-lg">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#12192C] to-[#0A0E18] font-poppins scrollbar-hide" style={{ fontFamily: 'Poppins, sans-serif', overflow: 'auto' }}>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <ScrollToTop />
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;