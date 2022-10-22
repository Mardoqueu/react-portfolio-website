import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" class={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} class={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} class={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} class={activeNav === '#about' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"><AiOutlinePhone/></a>

    </nav>
  )
}

export default Nav