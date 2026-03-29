import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
        <img src="/logo-new.png" alt="SHYENA AGRI-TECH Logo" className="h-16 w-16 object-contain" />
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
            <img src="/logo-new.png" alt="SHYENA AGRI-TECH Logo" className="h-12 w-12 object-contain" />
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
        <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 SHYENA AGRI-TECH. All rights reserved.</p>
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
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/918897726897"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}
