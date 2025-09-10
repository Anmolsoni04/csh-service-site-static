import React, { useEffect, useState } from 'react'
import { useScroll, animated } from 'react-spring'

const ParallaxShowcase: React.FC = () => {
  const [height, setHeight] = useState(1)
  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight || 1)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { scrollYProgress } = useScroll({
    // react-spring's useScroll returns { scrollYProgress } from 0..1
    // we map it to transform values below
  } as any)

  return (
    <section className="section relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Selected results</h2>
        <div className="relative h-[60vh] rounded-3xl overflow-hidden border shadow-soft bg-black">
          <animated.img
            style={{ transform: scrollYProgress.to((v: number) => `translateY(${v * -40}px) scale(1.05)`) as any }}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            src="https://images.unsplash.com/photo-1599407381071-9ba97db38cdf?q=80&w=1600&auto=format&fit=crop"
            alt="Work 1"
          />
          <animated.img
            style={{ transform: scrollYProgress.to((v: number) => `translateY(${v * 60}px)`) as any }}
            className="absolute bottom-8 right-8 w-1/3 rounded-xl border-4 border-white shadow-2xl"
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop"
            alt="Work 2"
          />
          <div className="absolute left-8 bottom-8 max-w-md text-white">
            <div className="text-sm uppercase tracking-widest opacity-80">Case Study</div>
            <h3 className="text-2xl font-extrabold">Growing signups 2.4x for a SaaS</h3>
            <p className="opacity-90 mt-2">New positioning, brand refresh, and a conversion-focused website.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxShowcase
