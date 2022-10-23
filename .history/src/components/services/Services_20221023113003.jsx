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
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Encontrar soluções para problemas nos sistemas;</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Atuar na estruturação e desenvolvimento dos sites</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Realizar o suporte às aplicações em produção</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Levantamento de informações</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Desenvolver e manter os sistemas</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Modelagem de dados, e especificação técnica</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes;</p>
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