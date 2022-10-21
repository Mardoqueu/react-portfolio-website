import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Olá, eu sou</h5>
        <h1>Mardoqueu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <div className='me'>
            <img src={ME} alt='foto-pessoal'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header