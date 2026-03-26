import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BM Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
