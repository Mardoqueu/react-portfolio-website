import React from 'react'
import './about.css';
import ME from '../../assets/me.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer mais</h5>
      <h2>Sobre mim</h2>


      <div className='container about__container'>    
        <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt="About Image"></img>
              </div>
          </div>

          <div className='about__content'>

          </div>
      </div>
    </section>
  )
}

export default About