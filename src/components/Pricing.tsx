import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useInView } from '@/hooks/useInView'

const tiers = [
  { name: 'Starter', price: '₹49k', features: ['Brand audit', 'Landing page', '2 weeks support']},
  { name: 'Growth', price: '₹1.5L', features: ['Identity system', 'Multi-page site', 'Analytics & CRO']},
  { name: 'Scale', price: '₹3L+', features: ['End-to-end rebrand', 'Web + campaign', 'Ongoing retainer']},
]

const Card: React.FC<{t: typeof tiers[number], delay?: number, featured?: boolean}> = ({ t, delay=0, featured }) => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const anim = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 16, delay })
  return (
    <animated.div ref={ref} style={anim as any} className={`rounded-3xl border bg-white p-8 shadow-soft ${featured ? 'ring-2 ring-accent' : ''}`}>
      <h3 className="text-xl font-bold">{t.name}</h3>
      <div className="mt-3 text-4xl font-extrabold">{t.price}</div>
      <ul className="mt-6 space-y-2 text-gray-700">
        {t.features.map((f, idx) => (<li key={idx}>• {f}</li>))}
      </ul>
      <a href="#contact" className="mt-6 inline-block rounded-full bg-accent px-5 py-2 font-semibold text-white">Choose</a>
    </animated.div>
  )
}

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Flexible pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card t={tiers[0]} />
          <Card t={tiers[1]} featured delay={100} />
          <Card t={tiers[2]} delay={200} />
        </div>
      </div>
    </section>
  )
}

export default Pricing
