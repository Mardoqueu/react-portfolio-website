import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Venha me conhecer</h5>
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
              Iniciei minha carreira como professor de informática no Instituto Federal do Maranhão (IFMA). Essa foi uma ótima experiência, pois desenvolvi habilidades como falar em público, e também aprimorei minha network, aprendi várias stacks como HTML, CSS, JavaScript, Bootstrap, Angular, Java, MySQL, Spring Boot e outros Front-End e tecnologias de back-end. Toda a experiência me levou a me apaixonar por uma carreira onde posso mergulhar na tecnologia e ter sensibilidade realizar impactos sociais positivos no mundo.              
              </p>

              <a href='#contact' className='btn btn-primary'>Entrar em contato</a>
          </div>
      </div>
    </section>
  )
}

export default About