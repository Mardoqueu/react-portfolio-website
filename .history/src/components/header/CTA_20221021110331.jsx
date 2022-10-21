import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>        
        <a href={CV} download className='btn'>Baixar CV</a>
        <a href='#contact' className='btn btc-primary'>Venha me conhecer</a>
    </div>
  )
}

export default CTA