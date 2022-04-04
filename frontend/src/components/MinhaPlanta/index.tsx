import Image_3 from '../../assets/img/image_3.svg';

import './styles.css';
import Card_elipse from '../Card_elipce';






export default function MinhaPlanta() {
  return (

    <div className='container_fundo_a'>


      <div className='container_minhaplanta'>
        <img src={Image_3} />
      </div>

      <Card_elipse />
    </div>
  );
}
