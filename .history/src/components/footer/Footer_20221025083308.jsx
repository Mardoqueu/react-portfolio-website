import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fa'


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

        <div className='footer__socials'>
          <a href='https://www.facebook.com/mardoqueu.telvina'></a>
          <a href='https://www.instagram.com/mardoqueu.sousa/'></a>
          <a href='https://twitter.com/SousaMardoqueu'></a>


        </div>
    </footer>
  )
}

export default Nav