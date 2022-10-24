import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 3, 
    image: IMG2,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 4, 
    image: IMG2,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 5, 
    image: IMG2,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Google Clone',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={IMG1}></img>
            </div>
                <h3>Google Clone</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com/Mardoqueu/google-v1' className='btn' target='_blank'>Github</a>
                <a href='https://google-v1-teal.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>




      </div>
    </section>
  )
}

export default Portfolio