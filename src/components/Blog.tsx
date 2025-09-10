import React from 'react'
import { useInView } from '@/hooks/useInView'
import { animated, useSpring } from 'react-spring'

const posts = [
  { title: 'Positioning 101: stand where it matters', img: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Web performance for marketers', img: 'https://images.unsplash.com/photo-1477014676809-1957b3c7f223?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Design systems without the bloat', img: 'https://images.unsplash.com/photo-1551281044-8c5f99389edd?q=80&w=1200&auto=format&fit=crop' }
]

const Blog: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>()
  const anim = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 10 })

  return (
    <section id="blog" className="section bg-soft">
      <div className="mx-auto max-w-7xl px-4">
        <animated.div ref={ref} style={anim as any} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Insights</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Ideas on brand, product, and growth.</p>
        </animated.div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-3xl border bg-white shadow-soft">
              <img src={p.img} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <a className="mt-3 inline-block text-accent font-semibold" href="#">Read →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
