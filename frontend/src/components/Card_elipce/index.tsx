import Ellipese_1 from '../../assets/img/ellipse_1.svg';

import './styles.css';






export default function Card_elipse() {
  return (

    <div className='container_fundo_b'>
      <div className='container_texto'>
        <div className='texto_e'> Como conseguir</div>
      </div>

      <div className='container_texto_P'>
        <div className='texto_p'> minha planta</div>
      </div>

      <div className='box_maior'>
        <div className='box'>  <img src={Ellipese_1} /> </div>
        <div className='container_texto'>
          <div className='texto_e'> Escolha sua planta</div>
        </div></div>



      <div className='box_maior'>
        <div className='box'>  <img src={Ellipese_1} /> </div>
        <div className='container_texto'>
          <div className='texto_e'> Faça o pedido</div>
        </div></div>


      <div className='box_maior'>
        <div className='box'>  <img src={Ellipese_1} /></div>

        <div className='container_texto'>
          <div className='texto_e'> Espere na sua casa</div>
        </div></div>
    </div>

  );
}
