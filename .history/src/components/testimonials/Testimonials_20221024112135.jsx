import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVTR1.jpg'
import AVTR2 from '../../assets/AVTR2.jpg'
import AVTR3 from '../../assets/AVTR2.jpg'
import AVTR4 from '../../assets/AVTR4.jpg'

const data = [
  
  {
  avatar: AVTR1,
  name: 'Heleno da Silva Souza',
  review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
  },  
  {
    avatar: AVTR2,
    name: 'Luan David Carrilho',
    review: 'O Mardoqueu possui fortes competências técnicas, possui qualidades enquanto pessoa, fundamentais em qualquer organização. Destaco a sua força de vontade, empatia, curiosidade e excelente capacidade de comunicação. Estudamos juntos e trabalhamos juntos em alguns projetos de softwares durante 5 anos e considero que ele tem todas as condições para evoluir rapidamente na sua carreira, recomendo-o vivamente para todas as funções que possam exigir skills técnicos na área de IT, perfil de liderança, resiliência e cultura de organização.'
  },
  {
    avatar: AVTR3,
    name: 'Kenny Wilker',
    review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
  },
  {
    avatar: AVTR4,
    name: 'Danrley Santos',
    review: 'Mardoqueu possui fortes habilidades em programação, lógica de programação e desenvolvimento de aplicações utilizando melhores práticas do mercado. Possui experiência em sala de aula e aptidão em resolver problemas.'
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Indicações</h5>
      <h2>Recomendações</h2>

      <div className='container testimonials__container'>
          {
            data.map(({avatar, name, review}, index) => {
              return (          
          <article key={index} className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt={name}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </article>)
            })
          }

      </div>


    </section>
  )
}

export default Testimonials