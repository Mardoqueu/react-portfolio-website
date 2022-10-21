import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaQuora} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'





const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mardoqueu-sousa/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Mardoqueu' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/mardoqueu.sousa/' target="_blank"><BsInstagram/></a>
        <a href='https://www.youtube.com/c/ProfMardoqueuSousa' target="_blank"><FaQuora/></a>
        <a href='https://www.quora.com/profile/Mardoqueu-Sousa' target="_blank"><AiFillYoutube/></a>


    </div>
  )
}

export default HeaderSocials