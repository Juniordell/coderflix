import React from 'react';
import Logo from '../../assets/img/logo.png'
import Button from '../Button'

import './styles.css';

function Main() {
  return (
      <nav className='Menu'>
          <a href="/">
            <img className='Logo' src={Logo} alt="NelsonFlix Logo"/>
          </a>

          <Button className='ButtonLink' href="/">
              Novo vídeo
          </Button>
      </nav>
  );
}

export default Main;