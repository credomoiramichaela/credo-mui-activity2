'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const navItems = [
    { label: '00 HOME', href: '/' },
    { label: '01 DESTINATION', href: '/destination' },
    { label: '02 CREW', href: '/crew' },
    { label: '03 TECHNOLOGY', href: '/technology' }
  ]

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.svg" alt="✦" />
      </div>
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <img src="/assets/icon-close.svg" alt="Close menu" className="menu-icon" />
        ) : (
          <img src="/assets/icon-hamburger.svg" alt="Open menu" className="menu-icon" />
        )}
      </div>

      {/* mobile hamburger */}
      <div className={`nav-mobile-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)}>
        <ul className={`nav-mobile-links ${menuOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              <Link href={item.href}>
                <span className="nav-number">{item.label.split(' ')[0]}</span>
                <span className="nav-text">{item.label.split(' ')[1]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className={`nav-links`}>
        {navItems.map((item) => (
          <li key={item.href} className={pathname === item.href ? 'active' : ''}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
