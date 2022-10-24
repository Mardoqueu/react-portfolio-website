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
    title: 'Movie App',
    github: 'https://github.com/Mardoqueu/movie-app-v1',
    demo: 'https://movie-app-v1-tawny.vercel.app/',
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Instagram Clone',
    github: 'https://github.com/Mardoqueu/insta-v',
    demo: 'https://insta-vercel.vercel.app/',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Twitter Clone',
    github: 'https://github.com/Mardoqueu/twitter',
    demo: 'https://twitter-peach.vercel.app/',
  },
  {
    id: 5, 
    image: IMG5,
    title: 'Help-desk',
    github: 'https://github.com/Mardoqueu/helpdesk-front',
    demo: 'https://helpdesk-front-tawny.vercel.app/login',
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Tindog',
    github: 'https://github.com/Mardoqueu/tindog',
    demo: 'https://tindog-lake.vercel.app/',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          {
            data.map
          }




      </div>
    </section>
  )
}

export default Portfolio