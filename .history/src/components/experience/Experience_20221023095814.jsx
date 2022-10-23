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
                <h4>HTML</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>CSS</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Tailwind</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>React</h4>
                <small className='text-light'>Experiência</small>
              </article>
            </div>
          </div>
          {/*End of Frontend*/}                
          <div className='experience__backend'>
            <h3>Desenvolvimento Frontend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>HTML</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>CSS</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>JavaScript</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>Tailwind</h4>
                <small className='text-light'>Experiência</small>
              </article>
              <article className='experience__details'>
                <AiFillCheckCircle/>
                <h4>React</h4>
                <small className='text-light'>Experiência</small>
              </article>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Experience