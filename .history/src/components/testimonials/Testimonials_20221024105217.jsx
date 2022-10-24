import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar1.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

const data = [
  
  {
  avatar: AVTR1,
  name: 'Heleno da Silva Souza',
  review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
  },
  {
    avatar: AVTR1,
    name: 'Heleno da Silva Souza',
    review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
    },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Indicações</h5>
      <h2>Recomendações</h2>

      <div className='container testimonials__container'>
          <article className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            </div>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </small>
          </article>

          <article className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            </div>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </small>
          </article>

          <article className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            </div>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </small>
          </article>

          <article className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            </div>
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </small>
          </article>
      </div>


    </section>
  )
}

export default Testimonials