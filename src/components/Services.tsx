import React from 'react'
import { useInView } from '@/hooks/useInView'
import { animated, useSpring, useTrail } from 'react-spring'

const items = [
  { title: 'Discovery', desc: 'Workshops, research, and audits to align on goals.'},
  { title: 'Brand Sprint', desc: 'Rapid sprints to define your story and system.'},
  { title: 'Design & Build', desc: 'High-fidelity design and efficient development.'},
  { title: 'Launch & Iterate', desc: 'Measure, learn, and optimize with real data.'},
]

const Services: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const trail = useTrail(items.length, {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 12,
    from: { opacity: 0, y: 12 },
    config: { mass: 1, tension: 250, friction: 18 }
  })
  const titleAnim = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 12, config: { tension: 220, friction: 20 }})

  return (
    <section id="services" className="section bg-soft">
      <div className="mx-auto max-w-7xl px-4">
        <animated.div ref={ref} style={titleAnim as any} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our process</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A flexible framework that scales from startups to enterprises.</p>
        </animated.div>
        <div className="grid md:grid-cols-4 gap-6">
          {trail.map((style, i) => (
            <animated.div key={i} style={style as any} className="rounded-2xl border bg-white p-6 shadow-soft">
              <div className="text-5xl font-black text-gray-200">{i+1}</div>
              <h3 className="mt-2 text-lg font-semibold">{items[i].title}</h3>
              <p className="mt-2 text-gray-600">{items[i].desc}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
