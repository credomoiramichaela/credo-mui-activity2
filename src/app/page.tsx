"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./page.css";

// Type definition for destination data
interface DestinationData {
  name: string;
  description: string;
  distance: string;
  time: string;
  image: string;
}

export default function Destination() {
  const [planet, setPlanet] = useState<keyof typeof destinations>("moon");

  const destinations: Record<string, DestinationData> = {
    moon: {
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      time: "3 DAYS",
      image: "/destination/image-moon.png",
    },
    mars: {
      name: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      time: "9 MONTHS",
      image: "/destination/image-mars.png",
    },
    europa: {
      name: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With its icy surface, it’s perfect for a little ice skating and exploration.",
      distance: "628 MIL. KM",
      time: "3 YEARS",
      image: "/destination/image-europa.png",
    },
    titan: {
      name: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home—just a few billion kilometers away. Fly through thick orange clouds and enjoy the methane lakes below.",
      distance: "1.6 BIL. KM",
      time: "7 YEARS",
      image: "/destination/image-titan.png",
    },
  };

  const current = destinations[planet];

  return (
    <main
      className="destination"
      style={{
        backgroundImage: `url(/destination/background-destination-desktop.jpg)`,
      }}
    >
      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li>00 HOME</li>
          <li className="active">01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </nav>

      {/* DESTINATION CONTENT */}
      <div className="destination-content">
        {/* LEFT SECTION */}
        <div className="planet-section">
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
          <Image
            src={current.image}
            alt={current.name}
            width={445}
            height={445}
            className="planet-img"
            priority
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="info-section">
          {/* Planet Tabs */}
          <div className="tabs">
            {Object.keys(destinations).map((key) => (
              <button
                key={key}
                className={planet === key ? "active" : ""}
                onClick={() => setPlanet(key as keyof typeof destinations)}
              >
                {destinations[key].name}
              </button>
            ))}
          </div>

          {/* Planet Info */}
          <h1>{current.name}</h1>
          <p>{current.description}</p>

          <div className="divider"></div>

          <div className="stats">
            <div>
              <h6>AVG. DISTANCE</h6>
              <p>{current.distance}</p>
            </div>
            <div>
              <h6>EST. TRAVEL TIME</h6>
              <p>{current.time}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
