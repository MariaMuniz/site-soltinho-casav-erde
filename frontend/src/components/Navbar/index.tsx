import React from 'react';


import { ReactComponent as Folha } from '../../assets/img/folha.svg';
import { ReactComponent as Casaverde } from '../../assets/img/casaverde.svg';
import './styles.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Container_pagina'>
      <header>
        <nav className='container'>
          <div className='soltinho-nav-content'>
            <Folha /> <Casaverde />

            <ul className='menu'>


              <li> <Link to="/">Como fazer/</Link></li>
              <li><Link to="/ofertas">Ofertas/</Link></li>
              <li><Link to="/depoimento">Depoimento/</Link></li>
              <li><Link to="/video">Video/</Link></li>
              <li><Link to="/meucarinho">Meu carrinho</Link></li>
            </ul>

          </div>
        </nav>
      </header>
    </div>
  );
}

