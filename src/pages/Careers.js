import React from 'react'
import Header from '../components/Header'
import image from "./assets/corp.jpg"
import TopBar from '../components/TopBar'

function Careers() {
  return (
    <div>
      <TopBar />
      <Header
        title="Rejoindre Beriverse" 
        content="Pour l'instant, nous n'avons pas d'offres disponibles. Cependant, nous restons ouverts concernant des demandes de stages etc."
        image={image}
      />
    </div>
  )
}

export default Careers
