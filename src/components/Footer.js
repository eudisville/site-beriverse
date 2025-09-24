import React from 'react'
import { Link } from 'react-router-dom'
import Twitter from './assets/twitter.png'
import Facebook from './assets/facebook.png'
import Linkedin from './assets/linkedin.png'
import Mail from './assets/e-mail.png'
import Instagram from './assets/instagram.png'
import './styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-left">
        <h4>© 2025 Beriverse. Tous droits réservés.</h4>
      </div>
      <div className="footer-right">
        <Link to="mailto:beriverse@gmail.com" target='_blank'><img src={Mail} alt="" /></Link>
        <Link to="https://www.instagram.com/share/BAUUd8x24q" target='_blank'><img src={Instagram} alt="" /></Link>
        <Link><img src={Twitter} alt="" /></Link>
        <Link to="https://www.linkedin.com/company/beriverse/" target='_blank'><img src={Linkedin} alt="" /></Link>
        <Link to="https://www.facebook.com/share/16m1N58jWY/?mibextid=wwXIfr"><img src={Facebook} alt="" /></Link>
      </div>
    </div>
  )
}

export default Footer