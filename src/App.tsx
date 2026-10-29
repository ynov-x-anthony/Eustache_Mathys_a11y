import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="page">
      <a href="#form" className="skip-link">Aller au formulaire</a>

      <h1>Paramètres du compte</h1>

      <form id="form" className="form">
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <button type="button" onClick={() => setIsModalOpen(true)}>
          Ouvrir les préférences avancées
        </button>
      </form>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default App