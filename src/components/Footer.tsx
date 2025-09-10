// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-xl font-extrabold">Agensia<span className="text-cyan-400">.</span></div>
          <p className="mt-3 text-white/70 max-w-md">Independent creative studio designing bold brands and performant websites.</p>
          <div className="mt-6 space-y-2 text-white/70">
            <div>hello@agensia.example</div>
            <div>+91 99999 99999</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Follow</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} Agensia. All rights reserved.</div>
    </footer>
  )
}

export default Footer
