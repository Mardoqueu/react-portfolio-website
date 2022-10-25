import React from 'react'
import './footer.css';
const Nav = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Mardoqueu</a>

        <ul className='permalinks'>
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <li><a href='#'></a></li>
        </ul>
    </footer>
  )
}

export default Nav