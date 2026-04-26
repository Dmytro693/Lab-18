import React from 'react';
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';

// Pidval z posylannyamy na sotsmerezhi
const Footer = () => {
  return (
    <footer>
      <p>© 2026 Developer Portfolio. Vsi prava zakhyshcheni.</p>
      <div>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://t.me" target="_blank" rel="noreferrer"><FaTelegram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;