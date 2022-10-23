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
                  <BsCheck2 className='service__list-icon'/>
                  <p>Experiência de trabalho em projetos</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li>
                  <BsCheck2 className='service__list-icon'/>
                  <p>Experiência com versionamento de código utilizando GIT</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Boa lógica de programação</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Trabalho bem em equipe</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Experiência em desenvolvimento Front-End Web</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Experiência em projetos utilizando Next.js</p>
                  </li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Conceitos avançados de API Restful</p>
                  </li>
              </ul>
          </article> 

          {/*End of this column*/}
          <article className='service'>
          <div className='service__head'>
            <h3>Como eu posso colaborador</h3>
          </div>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Ajudar a desenvolver novas funcionalidades de acordo com o roadmap do produto/clientes</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Encontrar soluções para problemas nos sistemas;</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Atuar na estruturação e desenvolvimento dos sites</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Realizar o suporte às aplicações em produção</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Levantamento de informações</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Desenvolver e manter os sistemas</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p>Modelagem de dados, e especificação técnica</p></li>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p> Consumo de APIs para integração com os sistemas</p></li>
              </ul>
          </article> 
          {/*End of this column*/}

          <article className='service'>
          <div className='service__head'>
            <h3>O que ofereço a mais?</h3>
          </div>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/>
                  <p> Fortes habilidades de comunicação com a capacidade de discutir qualquer problema com uma ampla variedade de indivíduos e grupos</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p> Capacidade de permanecer profissional em situações estressantes/disputas</p>
              </ul>
              <ul className='service_list'>
                  <li><BsCheck2 className='service__list-icon'/></li>
                  <p> Além de possuir forte experiência com a língua inglesa.</p>
              </ul>             
              
          </article> 
          {/*End of this column*/}
           
      </div>


    </section>
  )
}

export default Services