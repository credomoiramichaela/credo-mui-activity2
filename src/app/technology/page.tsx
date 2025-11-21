'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Technology {
  id: string
  name: string
  description: string
  images: {
    portrait: string
    landscape: string
  }
}

const technologies: Technology[] = [
  {
    id: '1',
    name: 'Launch vehicle',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: '/technology/image-launch-vehicle-portrait.jpg',
      landscape: '/technology/image-launch-vehicle-landscape.jpg'
    }
  },

  {
    id: '2',
    name: 'Spaceport',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    images: {
      portrait: '/technology/image-spaceport-portrait.jpg',
      landscape: '/technology/image-spaceport-landscape.jpg'
    }
  },
  
  {
    id: '3',
    name: 'Space capsule',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: '/technology/image-space-capsule-portrait.jpg',
      landscape: '/technology/image-space-capsule-landscape.jpg'
    }
  }
]

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState<Technology>(technologies[0])

  const handleTechSelect = (technology: Technology) => {
    setSelectedTech(technology)
  }

  useEffect(() => {
    const linkItem = document.querySelector('#technology')
    linkItem?.classList.add('active')

    const circle = document.querySelector(`#circle-${selectedTech.id}`)
    circle?.classList.add('active')

    return () => {
      linkItem?.classList.remove('active')
      circle?.classList.remove('active')
    }
  }, [selectedTech])

  return (
    <main
      className="technology"
      style={{
        backgroundImage: `url(/technology/background-technology-desktop.jpg)`
      }}>
      <div className="technology-content">
        <h5 className="tech-title">
          <span>03</span> SPACE LAUNCH 101
        </h5>

        <div className="tech-main-content">
          <div className="tech-info-section">
            <div className="tech-details">
              <div className="tech-navigation">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    id={`circle-${tech.id}`}
                    className={`tech-circle ${selectedTech.id === tech.id ? 'active' : ''}`}
                    onClick={() => handleTechSelect(tech)}>
                    <span>{tech.id}</span>
                  </button>
                ))}
              </div>

              <div className="tech-text">
                <p className="tech-subtitle">THE TERMINOLOGY...</p>
                <h1>{selectedTech.name}</h1>
                <p className="tech-description">{selectedTech.description}</p>
              </div>
            </div>
          </div>

          <div className="tech-image-section">
            <Image
              src={selectedTech.images.landscape}
              alt={selectedTech.name}
              width={515}
              height={527}
              className="tech-landscape"
              priority
            />
            <Image
              src={selectedTech.images.portrait}
              alt={selectedTech.name}
              width={515}
              height={527}
              className="tech-portrait"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Technology
