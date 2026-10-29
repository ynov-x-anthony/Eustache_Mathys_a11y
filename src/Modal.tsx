import { useEffect, useRef } from 'react'

interface Props {
  onClose: () => void
}

export default function Modal({ onClose }: Props) {
  const modalContainerRef = useRef<HTMLDivElement>(null)
  const lastActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    lastActiveElement.current = document.activeElement as HTMLElement
    
    const focusableNodes = modalContainerRef.current!.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableNodes.length > 0) {
      focusableNodes[0].focus()
    }

    const handleKeyboardNavigation = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      
      if (event.key !== 'Tab') return

      const firstNode = focusableNodes[0]
      const lastNode = focusableNodes[focusableNodes.length - 1]

      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault()
        lastNode.focus()
      } else if (!event.shiftKey && document.activeElement === lastNode) {
        event.preventDefault()
        firstNode.focus()
      }
    }

    document.addEventListener('keydown', handleKeyboardNavigation)
    
    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation)
      if (lastActiveElement.current) {
        lastActiveElement.current.focus()
      }
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div 
        className="modal" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="advanced-prefs-title" 
        ref={modalContainerRef}
      >
        <h2 id="advanced-prefs-title">Préférences avancées</h2>
        <label htmlFor="language-select">Langue</label>
        <select id="language-select">
          <option>Français</option>
          <option>English</option>
        </select>
        <button type="button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}