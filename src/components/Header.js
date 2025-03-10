import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => (
  <header class="header">
    <div class="contenedor contenido-header">
      <div class="barra">
        <a href="/">
          <img src="/img/ifx_logo.png" alt="logo ifx Europe" />
        </a>
        <div class="mobile-menu">
          <picture>
              <source srcset="/img/barras.webp" type="image/webp" />
              <source srcset="/img/barras.jpg" type="image/jpeg" />
              <img src="/img/barras.jpg" alt="icono menu responsive" />
          </picture>
        </div>
        <nav class="navegacion">
            <div class="menu-item">
                <a href="#">unternehmen</a>
                <div class="submenu">
                    <Link to="/uber-uns">Über uns</Link>
                </div>
            </div>
            <Link to="/programme">Programme</Link>
            <Link to="/gastfamilie">Gastfamilie</Link>
            <Link to="/informationen">Informationen</Link>
        </nav>
      </div>
    </div>
  </header> 
);

export default Header;
