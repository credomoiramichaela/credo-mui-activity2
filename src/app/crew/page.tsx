'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface CrewMember {
  id: number
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

const crewMembers: CrewMember[] = [
  {
    id: 1,
    name: 'Douglas Hurley',
    images: {
      png: '/crew/image-douglas-hurley.png',
      webp: '/crew/image-douglas-hurley.webp'
    },
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  {
    id: 2,
    name: 'Mark Shuttleworth',
    images: {
      png: '/crew/image-mark-shuttleworth.png',
      webp: '/crew/image-mark-shuttleworth.webp'
    },
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    id: 3,
    name: 'Victor Glover',
    images: {
      png: '/crew/image-victor-glover.png',
      webp: '/crew/image-victor-glover.webp'
    },
    role: 'Pilot',
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    id: 4,
    name: 'Anousheh Ansari',
    images: {
      png: '/crew/image-anousheh-ansari.png',
      webp: '/crew/image-anousheh-ansari.webp'
    },
    role: 'Flight Engineer',
    bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  }
]

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState<CrewMember>(crewMembers[0])

  const handleCrewSelect = (crewMember: CrewMember) => {
    setSelectedCrew(crewMember)
  }

  useEffect(() => {
    const linkItem = document.querySelector('#crew')
    linkItem?.classList.add('active')

    const dot = document.querySelector(`#crew-${selectedCrew.id}`)
    dot?.classList.add('active')

    return () => {
      linkItem?.classList.remove('active')
      dot?.classList.remove('active')
    }
  }, [selectedCrew])

  return (
    <main
      className="crew"
      style={{
        backgroundImage: `url(/crew/background-crew-desktop.jpg)`
      }}>
      <div className="crew-content">
        <div className="crew-info-section">
          <h5>
            <span>02</span> MEET YOUR CREW
          </h5>
          <div className="crew-details">
            <div className="crew-text">
              <h4>{selectedCrew.role}</h4>
              <h3>{selectedCrew.name}</h3>
              <p>{selectedCrew.bio}</p>
            </div>

            <div className="crew-navigation">
              {crewMembers.map((member) => (
                <button
                  key={member.id}
                  id={`crew-${member.id}`}
                  className={`crew-dot ${selectedCrew.id === member.id ? 'active' : ''}`}
                  onClick={() => handleCrewSelect(member)}
                  aria-label={`Select ${member.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="crew-image-section">
          {selectedCrew.images?.png && (
            <Image
              src={selectedCrew.images.png}
              alt={selectedCrew.name}
              width={568}
              height={712}
              className="crew-img"
              priority
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Crew
