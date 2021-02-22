
import React from 'react'
import './style.scss';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo"/>
      <p className='header-text'>Dope out</p>
    </div>
  )
}

export default Header