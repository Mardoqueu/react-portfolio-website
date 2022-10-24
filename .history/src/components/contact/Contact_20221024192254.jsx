import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Vamos conversar!</h5>
      <h2>Contato</h2>

      <div className='container .contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail/>
              <h4>Email</h4>
              <h5>mdq767@gmail.com</h5>
              <a href='mailto:mdq767@gmail.com'>Enviar uma mensagem</a>
            </article>

            <article className='contact__option'>
              <HiOutlineMail/>
              <h4>Messeger</h4>
              <h5>Mardoqueu Sousa</h5>
              <a href='https://'>Enviar uma mensagem</a>
            </article>

            <article className='contact__option'>
              <HiOutlineMail/>
              <h4>Email</h4>
              <h5>mdq767@gmail.com</h5>
              <a href='mailto:mdq767@gmail.com'>Enviar uma mensagem</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form action=''></form>
      </div>
    </section>
  )
}

export default Contact