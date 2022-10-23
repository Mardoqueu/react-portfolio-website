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
                  <li>                  
                    <p><BsCheck2 className='service__list-icon'/> Experiência de trabalho em projetos</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  
                  <p><BsCheck2 className='service__list-icon'/> Experiência com versionamento de código utilizando GIT</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Boa lógica de programação</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Trabalho bem em equipe</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Experiência em desenvolvimento Front-End Web</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Experiência em projetos utilizando Next.js</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Conceitos avançados de API Restful</p>
                  </li>
              </ul>
          </article> 

          {/*End of this column*/}
          <article className='service'>
          <div className='service__head'>
            <h3>Como eu posso colaborador</h3>
          </div>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Encontrar soluções para problemas nos sistemas;</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Atuar na estruturação e desenvolvimento dos sites</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Realizar o suporte às aplicações em produção</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Levantamento de informações</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Desenvolver e manter os sistemas</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Modelagem de dados, e especificação técnica</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Consumo de APIs para integração com os sistemas</p></li>
              </ul>
          </article> 
          {/*End of this column*/}

          <article className='service'>
          <div className='service__head'>
            <h3>O que ofereço a mais?</h3>
          </div>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/>  Fortes habilidades de comunicação com a capacidade de discutir qualquer problema com uma ampla variedade de indivíduos e grupos</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Capacidade de permanecer profissional em situações estressantes/disputas</p></li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <p><BsCheck2 className='service__list-icon'/> Além de possuir forte experiência com a língua inglesa.</p></li>
              </ul>             
              
          </article> 
          {/*End of this column*/}
           
      </div>


    </section>
  )
}

export default Services