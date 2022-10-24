import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Vamos conversar!</h5>
      <h2>Entrar em contato</h2>

      <div className='container .contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <h4>Email</h4>
              <h5>mdq767@gmail.com</h5>
              <a href='mail'></a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form action=''></form>
      </div>
    </section>
  )
}

export default Contact