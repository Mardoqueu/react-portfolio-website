import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mardoqueu-sousa/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Mardoqueu' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/mardoqueu.sousa/' target="_blank"><FaInstagramSquare/></a>

    </div>
  )
}

export default HeaderSocials