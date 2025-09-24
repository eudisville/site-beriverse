import React from 'react'
import Header from '../components/Header'
import img1 from "./assets/digit.jpg"

function Technology() {
  return (
    <div>
      <Header 
        title="Reinventez vos processus avec nous" 
        content="Nous aidons les entreprises à accélérer leurs transformations digitales afin de développer
        de nouveaux modèles économiques et gagner en productivité."
        image={img1}
        button="Parcourir nos offres"
     />
    </div>
  )
}

export default Technology
