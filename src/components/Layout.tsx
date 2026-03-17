import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
        <img src="/logo.svg" alt="SHYENA AGRI-TECH Logo" className="h-16 w-16 object-contain" />
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">SHYENA AGRI-TECH</h2>
      </Link>
      
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link to="/" className={`text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Home</Link>
        <Link to="/technology" className={`text-sm font-semibold transition-colors ${location.pathname === '/technology' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Technology</Link>
        <Link to="/services" className={`text-sm font-semibold transition-colors ${location.pathname === '/services' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Services</Link>
        <Link to="/contact" className={`text-sm font-semibold transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Contact</Link>
      </nav>
      
      <div className="hidden lg:block">
        <Link to="/contact" className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-slate-900 text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-sm">
          Get Started
        </Link>
      </div>
      
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden text-slate-900 dark:text-slate-100 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
      </button>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-primary/10 shadow-lg lg:hidden flex flex-col px-6 py-6 gap-6">
          <Link to="/" onClick={closeMenu} className={`text-base font-semibold transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Home</Link>
          <Link to="/technology" onClick={closeMenu} className={`text-base font-semibold transition-colors ${location.pathname === '/technology' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Technology</Link>
          <Link to="/services" onClick={closeMenu} className={`text-base font-semibold transition-colors ${location.pathname === '/services' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Services</Link>
          <Link to="/contact" onClick={closeMenu} className={`text-base font-semibold transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>Contact</Link>
          <Link to="/contact" onClick={closeMenu} className="flex items-center justify-center rounded-lg h-12 mt-2 bg-primary text-slate-900 text-base font-bold transition-transform active:scale-95 shadow-sm">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/10 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="SHYENA AGRI-TECH Logo" className="h-12 w-12 object-contain" />
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">SHYENA AGRI-TECH</h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Leading the transition to sustainable, high-efficiency agriculture through robotics and artificial intelligence.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-slate-900 dark:text-slate-100">Support</h4>
          <ul className="text-sm space-y-4 text-slate-500 dark:text-slate-400">
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 SHYENA AGRI-TECH Solutions Pvt. Ltd. All rights reserved.</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">Proudly serving agricultural innovation globally.</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col font-display">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
