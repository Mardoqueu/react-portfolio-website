import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio1.jpg'
import IMG6 from '../../assets/portfolio1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <h3>This is a portfolio item title</h3>
                <a href='https://github.com' className='btn' target='_blank'>Github</a>
                <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

          </article>
      </div>
    </section>
  )
}

export default Portfolio