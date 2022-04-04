import React from 'react';
import { CardOfertas } from '../CardOfertas';
import './styles.css';
import Produto1 from '../Produto1';
import Produto2 from '../Produto2';
import Produto3 from '../Produto3';
import Produto4 from '../Produto4';
import Produto5 from '../Produto5';
import Produto6 from '../Produto6';

export const Card_of: React.FC = () => {
  return (
    <div className='container_ofertas_prod'>
      <div className='container_titulo'>Conheça as nossas</div>
      <div className='container_subtitulo'>ofertas
      </div>
      <div className='container_of'>
        <div className='container_img_p'>
          <Produto1 />
          <CardOfertas titulo='Ajuga' subtitulo='reptans' texto='R$ 20,00' preco='Comprar ->' />
        </div>

        <div className='container_img_p'>
          <Produto2 />
          <CardOfertas titulo='Cordyline' subtitulo='fruticosa' texto='R$ 20,00' preco='Comprar ->' />
        </div>
        <div className='container_img_p'>
          <Produto3 />
          <CardOfertas titulo='Crassula' subtitulo='ovata' texto='R$ 20,00' preco='Comprar ->' />
        </div>

      </div>


      <div className='container_of'>
        <div className='container_img_p'>
          <Produto4 />
          <CardOfertas titulo='Cyperus' subtitulo='rotundos' texto='R$ 20,00' preco='Comprar ->' />
        </div>

        <div className='container_img_p'>
          <Produto5 />
          <CardOfertas titulo='Delairea' subtitulo='odorata' texto='R$ 20,00' preco='Comprar ->' />
        </div>
        <div className='container_img_p'>
          <Produto6 />
          <CardOfertas titulo='Datura' subtitulo='metel' texto='R$ 20,00' preco='Comprar ->' />
        </div>

      </div></div>

  );

}