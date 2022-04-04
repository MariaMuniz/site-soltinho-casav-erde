import React from 'react';
import { ReactComponent as Email2 } from '../../assets/img/email2.svg';
import { ReactComponent as Email } from '../../assets/img/email.svg';
import './styles.css';
import { Input } from './styles';


export function Form() {
  return (
    <div className='container_form'>
      <div className='container_input'>
        <div className='img_email'><Email /> </div>
        <div className='img_email_2'><Email2 /></div>
        <Input />
      </div>

      <div className='container_btn'>
        <div className='texto'>Assinar Newletter</div>
      </div>

    </div>

  );
}

