import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center text-slate-100 text-sm mt-4">
      © {currentYear} Camilo Ruas. All rights reserved.
    </footer>
  );
}

export default Footer;
