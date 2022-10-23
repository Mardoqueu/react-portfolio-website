import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>Minha Experiência</h2>

      <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Desenvolvimento Frontend</h3>
            <div className='experience__content'>
              <article className='experience'>

              </article>
            </div>
          </div>
          <div className='experience__backend'>
            <h3>Desenvolvimento Backend</h3>
            <div className='experience__content'>
              
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience