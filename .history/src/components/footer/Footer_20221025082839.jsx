import React from 'react'
import './footer.css';
const Nav = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Mardoqueu</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experiências</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portifolio'>Portfolio</a></li>
          <li><a href='#testimonials'>Recomendações</a></li>
          <li><a href='#contact'>Contato</a></li>
        </ul>

        <div className='footer_'></div>
    </footer>
  )
}

export default Nav