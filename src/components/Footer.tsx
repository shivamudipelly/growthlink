import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0202] text-center py-4">
      <p className="text-white text-lg">
        Copyright © EliteX . Made with{' '}
        <i className="fa-solid fa-heart text-red-500"></i> by{' '}
        <a href="#contact" className="text-blue-400 hover:underline">
          shivamudipelly
        </a>
      </p>
    </footer>
  );
};

export default Footer;
