import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar1.jpg'
import AVTR3 from '../../assets/avatar1.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Indicações</h5>
      <h2>Recomendações</h2>

      <div className='container testimonials__container'>
          <article className='testimonial'>
            <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            <h5 className='client__review'>Ernest Achiver</h5>
            <small className='client__review'></small>
            </div>
          </article>
      </div>


    </section>
  )
}

export default Testimonials