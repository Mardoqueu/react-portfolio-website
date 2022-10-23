import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço?</h5>
      <h2>Serviços</h2>

      <div className='container service__container'>
          <article className='service'>
          <div className='service__head'>
            <h3>Como eu posso colaborador</h3>
          </div>
              <ul className='service_list'>
                  <li><BsCheck2 className=''/></li>
              </ul>
          </article> 

          <div className='service'>
          <div className='service__head'>
            <h3>Como eu posso colaborador</h3>
          </div>            <div className=''>
            <article className='services__details'>
                <BsCheck2 class='services_details-icon'/>
                  <h4>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes;</h4>
              </article>
              <article className='services__details'>
                <BsCheck2 class='services_details-icon'/>
                  <h4>Ajudar a encontrar soluções para problemas nos sistemas</h4>
              </article>
            </div>
          </div>  

          <div className='service'>
          <div className='service__head'>
            <h3>Como eu posso colaborador</h3>
          </div>
            <div className=''>
            <article className='services__details'>
                <BsCheck2 class='services_details-icon'/>
                  <h4>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes;</h4>
              </article>
              <article className='services__details'>
                <BsCheck2 class='services_details-icon'/>
                  <h4>Ajudar a encontrar soluções para problemas nos sistemas</h4>
              </article>
            </div>
          </div>           
      </div>


    </section>
  )
}

export default Services