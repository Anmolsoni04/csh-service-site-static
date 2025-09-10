// src/components/Gallery.tsx
import React from 'react'

const items = [
  'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'
]

const Gallery: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">What we have done</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A selection of recent projects.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl group">
              <img src={src} alt={`work-${i}`} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute left-6 bottom-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-bold">Project Title {i+1}</div>
                <div className="text-sm">Short description</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
