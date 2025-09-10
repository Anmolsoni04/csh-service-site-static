import React, { useMemo } from 'react'
import { animated, useSpring } from 'react-spring'
import { useInView } from '@/hooks/useInView'

const TextReveal: React.FC<{ text: string }> = ({ text }) => {
  const { ref, inView } = useInView<HTMLHeadingElement>()
  const words = useMemo(() => text.split(' '), [text])
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 600 }
  })
  return (
    <h2 ref={ref} className="text-3xl md:text-4xl font-extrabold leading-tight">
      {words.map((w, i) => (
        <animated.span key={i} style={{ ...spring, display: 'inline-block', transitionDelay: `${i * 50}ms` as any }} className="mr-2">
          {w}
        </animated.span>
      ))}
    </h2>
  )
}

export default TextReveal
