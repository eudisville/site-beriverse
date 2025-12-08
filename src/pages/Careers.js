import React from 'react'
import Header from '../components/Header'
import image from "./assets/corp.jpg"

function Careers() {
  return (
    <div>
      <Header
        title="Rejoindre Beriverse" 
        content="Pour l'instant, nous n'avons pas d'offres disponibles. Cependant, nous restons ouverts concernant des demandes de stages etc."
        image={image}
      />
    </div>
  )
}

export default Careers
