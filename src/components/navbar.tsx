"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const navItems = [
    { label: "00 HOME", href: "/" },
    { label: "01 DESTINATION", href: "/destination" },
    { label: "02 CREW", href: "/crew" },
    { label: "03 TECHNOLOGY", href: "/technology" },
  ];
  
    return (
             <nav className="navbar">
        <div className="logo">✦</div>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>X</span>
         
        </div>
          <ul className={`nav-mobile-links ${menuOpen ? "show" : ""}`}>
        {navItems.map((item) => (
            <li
              key={item.href}
              className={pathname === item.href ? "active" : ""}
            //   onClick={() => setMenuOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className={`nav-links`}>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={pathname === item.href ? "active" : ""}
            //   onClick={() => setMenuOpen(false)}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )



}