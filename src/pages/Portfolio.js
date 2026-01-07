import React from 'react'
import Header from '../components/Header'
import img1 from './assets/Qa.jpg'
import TopBar from '../components/TopBar'
import './styles/event.css'

function Portfolio() {
  return (
    <div>
      <TopBar />
      <Header 
        title="Digital Day 2026" 
        content="Edition 2 - 17 Mai 2026, Abidjan"
        image={img1}
        button="Parcourir"
      />

       <section className='event'>
            <div className="event-content">
              <div className="event-content-text">
                <h1>Un event incontournable</h1>
                <p>Le Digital Day est un événement co-initié par Beriverse et Women Techmakers, dédié au partage de connaissances, 
                  à la montée en compétences et à la promotion d’un écosystème technologique plus inclusif.</p>
                <a href="https://www.behance.net/beriversestudio" target="_blank" rel="noopener noreferrer">
                  {/* <button>Voir Plus</button> */}
                </a>
              </div>

              <div className="event-content-image">
                <img src="collab.jpg" alt="" />
              </div>
            </div>
        </section>

        <section className="digits">
          <h2>Chiffres Digital Day 2025</h2>

          <div className="digit">
            <div className="digit-content">
              <h1>150+</h1>
              <h4>Participants</h4>
            </div>

            <div className="digit-content">
              <h1>10+</h1>
              <h4>Partenaires</h4>
            </div>

            <div className="digit-content">
              <h1>10+</h1>
              <h4>Speakers</h4>
            </div>
          </div>
        </section>
    </div>
    
  )
}

export default Portfolio