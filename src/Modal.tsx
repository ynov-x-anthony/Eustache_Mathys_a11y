import { useEffect } from 'react'

export default function Modal({ onClose }: Props) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-heading"
      >
        <h2 id="dialog-heading">Informations</h2>
        <p>Ce module couvre l'accessibilité et le SEO.</p>
        <button type="button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}