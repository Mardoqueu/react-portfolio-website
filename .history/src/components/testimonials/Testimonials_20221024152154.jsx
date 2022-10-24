import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  
  {
  avatar: AVTR1,
  name: 'Heleno da Silva Souza',
  occupation: 'Fullstack Software Engineer ',
  review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
  },  
  {
    avatar: AVTR2,
    name: 'Luan David Carrilho',
    occupation: 'Software Developer | Dart | Flutter',
    review: 'O Mardoqueu possui fortes competências técnicas, possui qualidades enquanto pessoa, fundamentais em qualquer organização. Destaco a sua força de vontade, empatia, curiosidade e excelente capacidade de comunicação. Estudamos juntos e trabalhamos juntos em alguns projetos de softwares durante 5 anos e considero que ele tem todas as condições para evoluir rapidamente na sua carreira, recomendo-o vivamente para todas as funções que possam exigir skills técnicos na área de IT, perfil de liderança, resiliência e cultura de organização.'
  },
  {
    avatar: AVTR3,
    name: 'Kenny Wilker',
    occupation: 'Developer | Java | Python | HTML | CSS | Javascript | Git/GitHub | Data Science & Analytics',
    review: 'Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.'
  },
  {
    avatar: AVTR4,
    name: 'Danrley Santos',
    occupation: 'Front-end Developer | Software engineer Master',
    review: 'Mardoqueu possui fortes habilidades em programação, lógica de programação e desenvolvimento de aplicações utilizando melhores práticas do mercado. Possui experiência em sala de aula e aptidão em resolver problemas.'
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Indicações</h5>
      <h2>Recomendações</h2>

      <Swiper className='container testimonials__container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}            
            pagination={{ clickable: true }}
      >
          {
            data.map(({avatar, name, occupation, review}, index) => {
              return (          
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
            <img src={avatar} alt={name}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <h6 className='client__name'>{occupation}</h6>
            <small className='client__review'>{review}</small>
          </SwiperSlide>)
            })
          }

      </Swiper>


    </section>
  )
}

export default Testimonials