import React from 'react'
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <div className={styles['header-container']}>
      <img src={logo} alt="logo"/>
      <p className={styles['header-text']}>Dope out</p>
    </div>
  )
}

export default Header