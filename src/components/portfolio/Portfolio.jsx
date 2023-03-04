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
import IMG9 from '../../assets/portfolio9.png'
import IMG10 from '../../assets/portfolio10.png'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Google Clone Next.js',
    github: 'https://github.com/Mardoqueu/google-v1',
    demo: 'https://google-v1-teal.vercel.app/',
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Movie App Next.js',
    github: 'https://github.com/Mardoqueu/movie-app-v1',
    demo: 'https://movie-app-v1-tawny.vercel.app/',
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Instagram Clone Next.js',
    github: 'https://github.com/Mardoqueu/insta-v1',
    demo: 'https://insta-vercel.vercel.app/',
  },
  {
    id: 4, 
    image: IMG4,
    title: 'Twitter Clone Next.js',
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
    image: IMG9,
    title: 'Help Desk',
    github: 'https://github.com/Mardoqueu/helpdesk-front',
    demo: 'https://helpdesk-front-tawny.vercel.app/login',
  },  
  {
    id: 7, 
    image: IMG8,
    title: 'Help Desk Backend API',
    github: 'https://github.com/Mardoqueu/helpdesk-backend',
    demo: 'https://bookstore-mdq.herokuapp.com/',
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
    image: IMG9,
    title: 'Bookstore',
    github: 'https://github.com/Mardoqueu/bookstore-front',
    demo: 'https://bookstore-front-nivg.vercel.app/',
  },
  {
    id: 10, 
    image: IMG8,
    title: 'Bookstore Backend API',
    github: 'https://github.com/Mardoqueu/bookstore',
    demo: 'https://bookstore-mdq.herokuapp.com/category',
  },
  {
    id: 11, 
    image: IMG8,
    title: 'Testes com JUnit 5 Mockito e Spring Boot (REST APIs)',
    github: 'https://github.com/Mardoqueu/cibernix-test-backend',
    demo: 'https://cibernix-test-backend.herokuapp.com/user',
  },
  {
    id: 12, 
    image: IMG9,
    title: 'To-Do List with Angular',
    github: 'https://github.com/Mardoqueu/todo-list-angular',
    demo: 'https://todo-list-angular-kz9o.vercel.app/',
  },
  {
    id: 13, 
    image: IMG8,
    title: 'Sistema de ordens de serviço (REST APIs)',
    github: 'https://github.com/Mardoqueu/os-api',
    demo: 'https://os-api.herokuapp.com/',
  },
  {
    id: 14, 
    image: IMG9,
    title: 'Angular Shopping',
    github: 'https://github.com/Mardoqueu/shopping-angular',
    demo: 'https://shoppingangular.vercel.app/products',
  },  
  {
    id: 15, 
    image: IMG10,
    title: 'Angular E-commerce V2',
    github: 'https://github.com/Mardoqueu/ecommerce-angular',
    demo: 'https://ecommerce-angular-lju81yguv-mardoqueu.vercel.app/',
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