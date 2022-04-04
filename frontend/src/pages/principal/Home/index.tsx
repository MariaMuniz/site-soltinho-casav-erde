import React from 'react';

import { ReactComponent as Planta } from '../../../assets/img/planta.svg';

import './style.css';

import Assinatura from '../../../components/Assinatura';
import Fundo_amarelo from '../../../components/Fundo_amarelo';
import MinhaPlanta from '../../../components/MinhaPlanta';
import { Card_of } from '../../../components/Card_of';


import Produto5 from '../../../assets/img/produto5.png';



export default function Home() {
  return (
    <div className='container_t'>
      <div className='soltinho_pg'>
        <Assinatura />

        <Fundo_amarelo />  </div >
      <div className='soltinho_column'>
        <MinhaPlanta />
        <Card_of></Card_of>
      </div >

    </div >
  );
}



