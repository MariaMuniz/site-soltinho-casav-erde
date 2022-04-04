import React from 'react';

import { ReactComponent as Planta } from '../../../assets/img/planta.svg';
import { ReactComponent as Hero } from '../../../assets/img/hero.svg';
import './styles.css';
import { Form } from '../../components/Form';




export default function Assinatura() {
  return (
    <div className='soltinho_container'>
      <div className='soltinho_texto '> Sua casa com as
      </div>
      <div className='soltinho_texto_c '>melhores plantas</div>
      <div className='soltinho_texto_b '>
        Encontre aqui uma vasta seleção de plantas para decorar a
        sua casa e torná-lo uma pessoa mais feliz no seu dia a
        dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.

      </div>
      <div><Form /></div>


    </div >
  );
}

