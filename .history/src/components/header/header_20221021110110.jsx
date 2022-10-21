import React from 'react'
import './header.css'
import CTA from './CTA'


const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Mardoqueu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
      </div>
    </header>
  )
}

export default header