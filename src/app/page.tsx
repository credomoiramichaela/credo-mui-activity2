"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function HomePage() {
 

  return (
    <>
      {/* HEADER */}

      {/* HERO SECTION */}
      <main className="hero">
        <div className="hero-content">
          <div className="text-section">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
          </div>
           <Link href="/destination" passHref>
          <div className="explore-btn">EXPLORE</div>
           </Link>
        </div>
      </main>

      {/* DESTINATION SECTION */}
    
    </>
  );
}
