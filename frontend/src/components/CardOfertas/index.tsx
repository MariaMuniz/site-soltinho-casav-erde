import React from 'react';
import './styles.css';

interface Props {

  titulo: string;
  subtitulo: string;
  texto: string;
  preco: string;
}

export const CardOfertas: React.FC<Props> = (props: Props) => {
  return (



    <div className='container_oferta'>

      <div className='texto_p'>{props.titulo}</div>
      <div className='texto_p'>{props.subtitulo}</div>
      <div className='texto_comprar'>{props.texto}</div>
      <div className='texto_preco'>{props.preco}</div>
    </div>


  );

}