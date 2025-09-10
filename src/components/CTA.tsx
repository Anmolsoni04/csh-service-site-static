import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useInView } from '@/hooks/useInView'

const CTA: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const anim = useSpring({ 
    from: { opacity: 0, y: 16 }, 
    to: { opacity: inView ? 1 : 0, y: inView ? 0 : 16 },
    config: { tension: 220, friction: 18 }
  })

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-7xl px-4">
        <animated.div ref={ref} style={anim as any} className="rounded-3xl bg-gradient-to-r from-accent to-cyan-500 p-10 text-white shadow-soft">
          <h2 className="text-3xl md:text-4xl font-extrabold">Have a project in mind?</h2>
          <p className="mt-2 text-white/90 max-w-2xl">Let’s align on goals and get you a plan with timelines and pricing.</p>
          <form className="mt-6 grid md:grid-cols-3 gap-4">
            <input className="rounded-xl px-4 py-3 text-black" placeholder="Your name" />
            <input className="rounded-xl px-4 py-3 text-black" placeholder="Work email" />
            <button className="rounded-xl bg-black px-6 py-3 font-semibold text-white">Request proposal</button>
          </form>
        </animated.div>
      </div>
    </section>
  )
}

export default CTA
