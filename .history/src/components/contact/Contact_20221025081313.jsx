import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Vamos conversar!</h5>
      <h2>Contato</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>mdq767@gmail.com</h5>
              <a href='mailto:mdq767@gmail.com' target="_blank">Enviar uma mensagem</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messeger</h4>
              <h5>Mardoqueu Sousa</h5>
              <a href='https://m.me/mardoqueu.telvina' target="_blank">Enviar uma mensagem</a>
            </article>

            <article className='contact__option'>
              <AiOutlineWhatsApp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+5599981228992</h5>
              <a href='https://api.whatsapp.com/send?phone=5599981228992' target="_blank">Enviar uma mensagem</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Nome' required></input>
            <input type='email' name='email' placeholder='E-mail' required></input>
            <textarea name='message' rows='7' placeholder='Mensagem' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
          </form>
      </div>
    </section>
  )
}

export default Contact