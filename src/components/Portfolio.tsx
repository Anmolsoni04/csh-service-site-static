import React from 'react'
import { useInView } from '@/hooks/useInView'
import { animated, useSpring } from 'react-spring'

const items = [
  { title: 'E-commerce Brand', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fintech SaaS', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Mobile App', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Healthcare', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' }
]

const Card: React.FC<{title: string, img: string, delay?: number}> = ({ title, img, delay=0 }) => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const anim = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 16,
    config: { tension: 220, friction: 18 },
    delay
  })
  return (
    <animated.div ref={ref} style={anim as any} className="group overflow-hidden rounded-3xl border bg-white shadow-soft">
      <img src={img} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </animated.div>
  )
}

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Recent work</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A small taste of projects we’ve helped bring to life.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Card key={i} title={it.title} img={it.img} delay={i*80} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
