import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
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
              <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experiência</h5>
                  <small>3+ Anos de atuação</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clientes</h5>
                  <small>Diversos Clientes</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projetos</h5>
                  <small>+10 projetos completos</small>
                </article>
              </div>

              <p>
              As you can see on my Linkedin, I have spent the last 3 years working as an IT developer and teacher. In a typical day, I answer emails and review code, and then I have a quick 10-minute meeting with a project colleague about what I did yesterday, what I'm planning to do today, and if there are any roadblocks holding me back. Right after that, I write some code or first finish any code review comments. I continue coding and also study new courses and articles on Front-End and Back-End.
              </p>

              <a href='#contact' className='btn btn-primary'>Entrar em contato</a>
          </div>
      </div>
    </section>
  )
}

export default About