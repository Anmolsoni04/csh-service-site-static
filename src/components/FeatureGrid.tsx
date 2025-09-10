import React from 'react'
import { useInView } from '@/hooks/useInView'
import { animated, useSpring } from 'react-spring'

const FeatureCard: React.FC<{title: string, desc: string, delay?: number}> = ({ title, desc, delay=0 }) => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const anim = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 24,
    config: { tension: 220, friction: 20 },
    delay
  })
  return (
    <animated.div ref={ref} style={anim as any} className="rounded-2xl border bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </animated.div>
  )
}

const FeatureGrid: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">What we do</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">From brand foundations to high-converting websites and campaigns, we ship work that moves the needle.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Brand Strategy" desc="Positioning, messaging, and naming to unlock growth." />
          <FeatureCard title="Visual Identity" desc="Logo systems, typography, color, art direction." delay={100} />
          <FeatureCard title="Websites" desc="Design & build in React/Vite, Webflow, or Headless CMS." delay={200} />
          <FeatureCard title="Content & Campaigns" desc="Landing pages, ads, motion, and creative production." delay={300} />
          <FeatureCard title="Design Systems" desc="Scalable UI kits and component libraries." delay={400} />
          <FeatureCard title="Analytics & CRO" desc="Experimentation and measurement to increase conversion." delay={500} />
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
