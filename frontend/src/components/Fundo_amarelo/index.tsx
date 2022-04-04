

import Planta from '../../assets/img/planta.svg';
import Hero from '../../assets/img/hero.svg';
import './styles.css';






export default function Fundo_amarelo() {
  return (
    <div className='soltinho_fundo'>
      <div className='container_fundo'>

        <img src={Hero} /> </div>
      <div className='container_planta'>
        <img src={Planta} />
      </div>
    </div>
  );
}

