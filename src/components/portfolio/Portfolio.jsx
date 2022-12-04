import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio6.png'
import IMG6 from '../../assets/portfolio5.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'

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
    title: 'Realtor Clone React',
    github: 'https://github.com/Mardoqueu/realtor-clone-react',
    demo: 'https://realtor-clone-react-blond.vercel.app/',
  },
  {
    id: 6, 
    image: IMG8,
    title: 'Help-desk Backend API',
    github: 'https://github.com/Mardoqueu/helpdesk-backend',
    demo: 'https://bookstore-mdq.herokuapp.com/',
  },  
  {
    id: 7, 
    image: IMG6,
    title: 'Help-desk Frontend',
    github: 'https://github.com/Mardoqueu/helpdesk-front',
    demo: 'https://helpdesk-front-tawny.vercel.app/login',
  },
  {
    id: 8, 
    image: IMG7,
    title: 'Portfolio Website',
    github: 'https://github.com/Mardoqueu/react-portfolio-website',
    demo: 'https://react-portfolio-website-indol.vercel.app/',
  },
  {
    id: 9, 
    image: IMG8,
    title: 'BookStore Java API',
    github: 'https://github.com/Mardoqueu/bookstore',
    demo: 'https://bookstore-mdq.herokuapp.com/category',
  },
  {
    id: 10, 
    image: IMG8,
    title: 'Testes com JUnit 5 Mockito e Spring Boot (REST APIs)',
    github: 'https://github.com/Mardoqueu/cibernix-test-backend',
    demo: 'https://cibernix-test-backend.herokuapp.com/user',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus projetos recentes</h5>
      <h2>Portfólio </h2>

      <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github, demo}) =>{
              return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
            </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
              )
            })
          }




      </div>
    </section>
  )
}

export default Portfolio