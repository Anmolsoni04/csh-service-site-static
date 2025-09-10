import React from 'react'
import { animated, useSpring } from 'react-spring'

const MarqueeText: React.FC = () => {
  const anim = useSpring({
    from: { x: 0 },
    to: async (next) => {
      while (1) {
        await next({ x: -100 })
        await next({ x: 0 })
      }
    },
    config: { duration: 12000 }
  })

  return (
    <div className="overflow-hidden bg-black text-white py-4">
      <animated.div style={{ transform: anim.x.to(v => `translateX(${v}%)`) }} className="whitespace-nowrap text-2xl font-extrabold tracking-tight">
        <span className="mx-8">Brand Strategy</span>
        <span className="mx-8">Identity Design</span>
        <span className="mx-8">Webflow / React</span>
        <span className="mx-8">Campaigns</span>
        <span className="mx-8">Motion Graphics</span>
        <span className="mx-8">Content Design</span>
        <span className="mx-8">UX Research</span>
        <span className="mx-8">Conversion Copy</span>
        <span className="mx-8">Design Systems</span>
      </animated.div>
    </div>
  )
}
export default MarqueeText
