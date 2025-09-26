'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Star, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/content', label: 'Nội Dung' },
  ];

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };


  return (
    <nav className="sticky top-1 z-50 w-[45%] rounded-2xl bg-white/5 dark:bg-gray-900/10 border border-white/30 dark:border-gray-700/20 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
              <div className="relative">
                <Star className="h-8 w-8 text-red-600 animate-pulse fill-current drop-shadow-lg" />
                <div className="absolute inset-0 h-8 w-8 text-yellow-300 animate-pulse opacity-30">
                  <Star className="h-8 w-8 fill-current" />
                </div>
              </div>
            <Link 
              href="/" 
              className={`text-[15px] font-bold text-red-600 drop-shadow-sm`}
            >
              {'Lịch Sử Đảng Cộng Sản Việt Nam'}
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                    pathname === link.href
                      ? 'bg-white/20 dark:bg-white/15 text-red-700 dark:text-red-400 shadow-lg border border-white/30 dark:border-white/25'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-white/15 dark:hover:bg-white/8 hover:text-red-600 dark:hover:text-red-400 hover:shadow-md hover:border hover:border-white/25 dark:hover:border-white/15'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-300 hover:shadow-md hover:border hover:border-white/25 dark:hover:border-white/15 backdrop-blur-sm"
            >
              {isDark ? <Sun className="h-5 w-5 drop-shadow-sm" /> : <Moon className="h-5 w-5 drop-shadow-sm" />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-white/15 dark:hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 hover:shadow-md hover:border hover:border-white/25 dark:hover:border-white/15 backdrop-blur-sm"
              >
                <svg
                  className="block h-6 w-6 drop-shadow-sm"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/15 dark:border-gray-700/20 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 dark:bg-gray-900/5 rounded-b-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-xl text-base font-medium transition-all duration-300 backdrop-blur-sm ${
                    pathname === link.href
                      ? 'bg-white/20 dark:bg-white/15 text-red-700 dark:text-red-400 shadow-lg border border-white/30 dark:border-white/25'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-white/15 dark:hover:bg-white/8 hover:text-red-600 dark:hover:text-red-400 hover:shadow-md hover:border hover:border-white/25 dark:hover:border-white/15'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;