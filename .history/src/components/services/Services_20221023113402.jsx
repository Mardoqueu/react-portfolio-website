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
            <h3>Qualificações</h3>
          </div>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Experiência de trabalho em projetos</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Experiência com versionamento de código utilizando GIT</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Boa lógica de programação</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Trabalho bem em equipe</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Experiência em desenvolvimento Front-End Web</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Experiência em projetos utilizando Next.js</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p>Conceitos avançados de API Restful</p>
              </ul>
          </article> 

          {/*End of this column*/}
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
                  <p> Consumo de APIs para integração com os sistemas</p>
              </ul>
          </article> 
          {/*End of this column*/}

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
                  <p> Consumo de APIs para integração com os sistemas</p>
              </ul>
          </article> 
          {/*End of this column*/}
           
      </div>


    </section>
  )
}

export default Services