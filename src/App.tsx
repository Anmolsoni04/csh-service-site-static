// src/App.tsx
import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesCarousel from '@/components/ServicesCarousel'
import SplitScrollWords from '@/components/SplitScrollWords'
import Clients from '@/components/Clients'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import MoreAboutCsh from "@/components/MoreAboutCsh"

const App: React.FC = () => {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <ServicesCarousel />
        <Clients />
        <SplitScrollWords />
        <MoreAboutCsh />
        <Gallery />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default App
