import React from 'react'
import './services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className='container service__container'>
          <div className='service__collaborate'>
            <h3>Como eu posso colaborador</h3>
            <div className='experience__content'>
            <article className='experience__details'>
                <AiFillCheckCircle class='experience_details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Avançado</small>
                </div>
              </article>
            </div>
          </div>
      </div>


    </section>
  )
}

export default Services