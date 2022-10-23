import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
                <h3>This is a portfolio item title</h3>
                <a href=''></a>
            </div>

          </article>
      </div>
    </section>
  )
}

export default Portfolio