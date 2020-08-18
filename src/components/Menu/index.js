import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

import './styles.css';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to="/">
        <img className='Logo' src={Logo} alt="CoderFlix Logo"/>
      </Link>

      <Button as={Link} className='ButtonLink' to="/cadastro/video">
        Novo vídeo
          </Button>
    </nav>
  );
}

export default Menu;