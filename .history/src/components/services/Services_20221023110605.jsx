import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className='container service__container'>
          <div className='service__collaborate'>
            <h3>Como eu posso colaborador</h3>
            <div className=''>
            <article className=''>
                <AiOutlineCheck class='experience_details-icon'/>
                  <h4>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes;</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineCheck class='experience_details-icon'/>
                  <h4>Ajudar a encontrar soluções para problemas nos sistemas</h4>
              </article>
            </div>
          </div>          
      </div>


    </section>
  )
}

export default Services