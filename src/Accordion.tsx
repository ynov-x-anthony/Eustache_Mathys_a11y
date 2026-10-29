import { useId, useState } from 'react'

export default function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const sectionId = useId()

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={sectionId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      
      {isOpen && (
        <div id={sectionId} className="accordion-panel">
          {children}
        </div>
      )}
    </div>
  )
}