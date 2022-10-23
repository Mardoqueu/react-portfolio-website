import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>Minha Experiência</h2>

      <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Desenvolvimento Frontend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Avançado</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Avançado</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Avançado</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>
            </div>
          </div>
          {/*End of Frontend*/}   

          <div className='experience__backend'>
            <h3>Desenvolvimento Backend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediário</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Básico</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>Firebase</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
              </article>              
            </div>
          </div>         
          
        </div>
    </section>
  )
}

export default Experience