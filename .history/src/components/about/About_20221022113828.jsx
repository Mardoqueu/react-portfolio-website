import React from 'react'
import './about.css';
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer mais</h5>
      <h2>Sobre mim</h2>


      <div className='container about__container'>    
        <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt="About"></img>
              </div>
          </div>

          <div className='about__content'>
              <div className='about_cards'>
                <article className='about__card'>
                  <FaAward className='about_icon'/>
                  <h5>Experiência</h5>
                  <h6>3+ Anos de atuação</h6>
                </article>

                <article className='about__card'>
                  <FiUsers className='about_icon'/>
                  <h5>Clientes</h5>
                  <small>Diversos Clientes</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>Projetos</h5>
                  <small>+10 projetos completos</small>
                </article>
              </div>

              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>

              <a href='#contact' className='btn btn-primary'>Entrar em contato</a>
          </div>
      </div>
    </section>
  )
}

export default About