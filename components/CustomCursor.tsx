'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    let seen = false

    const onMove = (e: MouseEvent) => {
      const el = cursorRef.current
      if (!el) return
      el.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      if (!seen) { seen = true; setVisible(true) }
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label'))
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={[
        'cursor-root',
        hovering && 'cursor-root--hover',
        clicking && 'cursor-root--click',
      ].filter(Boolean).join(' ')}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Arrow — tip at (16, 16) */}
        <path
          className="cursor-arrow"
          d="M16 16 L16 40 L22 32.5 L28 46 L31 44.5 L25 32.5 L34 32.5 Z"
        />
        {/* Rays radiating from tip */}
        <line className="cursor-ray" x1="16" y1="11" x2="16" y2="5"   strokeLinecap="round" strokeWidth="2.5" />
        <line className="cursor-ray" x1="20" y1="12" x2="24" y2="8"   strokeLinecap="round" strokeWidth="2.5" />
        <line className="cursor-ray" x1="21" y1="16" x2="27" y2="16"  strokeLinecap="round" strokeWidth="2.5" />
        <line className="cursor-ray" x1="12" y1="12" x2="8"  y2="8"   strokeLinecap="round" strokeWidth="2.5" />
        <line className="cursor-ray" x1="11" y1="16" x2="5"  y2="16"  strokeLinecap="round" strokeWidth="2.5" />
        <line className="cursor-ray" x1="14" y1="11" x2="12" y2="6"   strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    </div>
  )
}
