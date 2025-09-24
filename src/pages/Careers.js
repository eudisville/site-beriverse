import React from 'react'
import Header from '../components/Header'
import image from "./assets/corp.jpg"

function Careers() {
  return (
    <div>
      <Header
       title="Rejoindre Beriverse" 
       content="Bienvenue sur le site officiel de Beriverse Incorporation"
       image={image}
       button="Découvrir nos offres"
      />
    </div>
  )
}

export default Careers
