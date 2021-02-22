
import React from 'react'
import './style.scss';
import illustration from '../../assets/illustration.svg';

function HeroSlider() {
  return (
    <section className='hero-container'>
      <div className="hero-text">
        <div className='hero-text-main'>
          Dopeout
          </div>
        <div className='hero-text-sub'>
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