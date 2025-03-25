import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(sectionId);
    setIsMobileNavOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0e0202] h-20 w-full px-4">
      {/* Logo */}
      <div className="text-3xl font-extrabold">
        <span className="bg-gradient-to-r from-[#ff6600] to-[#ff0066] bg-clip-text text-transparent">
          EliteX
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block w-1/2">
        <ul className="flex justify-evenly space-x-8">
          {['skills', 'portfolio', 'aboutMe', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleNavClick(section)}
                className={`text-lg font-semibold transition-colors duration-300 hover:text-[#ff6600] ${
                  activeTab === section ? 'text-[#ff6600]' : 'text-white'
                }`}
              >
                {section === 'aboutMe'
                  ? 'About Me'
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="focus:outline-none text-white "
        >
          {isMobileNavOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileNavOpen && (
        <nav className="absolute inset-x-0 top-20 bg-[#0e0202] flex flex-col items-center py-4 md:hidden">
          {['skills', 'portfolio', 'aboutMe', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={` h-[50px]  text-lg font-semibold transition-colors duration-300 hover:text-[#ff6600] ${
                activeTab === section ? 'text-[#ff6600]' : 'text-white'
              }`}
            >
              {section === 'aboutMe'
                ? 'About Me'
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
