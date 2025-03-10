import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => (
  <div>
    <footer class="footer seccion">
        <div class="contenedor-footer">
            <nav class="navegacion-footer">
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="/impressum">Impressum</Link>
            </nav>
        </div>
    </footer>
  </div> 
);

export default Footer;
