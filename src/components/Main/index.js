import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import Button from '../Button'

import './styles.css';

function Main() {
  return (
      <nav className='Menu'>
          <Link to="/">
            <img className='Logo' src={Logo} alt="NelsonFlix Logo"/>
          </Link>

          <Button as={Link} className='ButtonLink' href="/cadastro/video">
              Novo vídeo
          </Button>
      </nav>
  );
}

export default Main;