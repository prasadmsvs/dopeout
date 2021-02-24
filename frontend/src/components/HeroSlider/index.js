
import React from 'react'
import styles from './styles.module.scss';
import illustration from '../../assets/illustration.svg';

function HeroSlider() {
  return (
    <section className={styles['hero-container']}>
      <div className={styles['hero-text']}>

        <div className={`${styles['hero-text-main']} ${styles['hero-text-main-1']}`}>
          Dope
        </div>
        <div className={`${styles['hero-text-main']} ${styles['hero-text-main-2']}`}>
          out
        </div>
        <div className={styles['hero-text-sub']}>
          Create innovate and share
        </div>
      </div>
      <div>
        <img src={illustration} alt="people working" />
      </div>



    </section>
  )
}

export default HeroSlider