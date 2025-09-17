// src/components/ContactHero.tsx
export default function ContactHero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white px-6">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
                <span className="px-4 py-1.5 border border-blue-400 rounded-full text-sm font-medium tracking-wide mb-6 inline-block">
                    Contact Us
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Find Us With Our <br />
                    <span className="text-blue-400">Updated Contact Options</span>
                </h1>

                <p className="text-gray-300 mb-12 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Sed etiam urna suspendisse risus cras
                    molestie fames elementum porta enim ullamcor quam semid senectus.
                </p>

                {/* Contact Info */}
                <div className="bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                    <div>
                        <h3 className="text-gray-400 text-sm uppercase mb-2">Email</h3>
                        <p className="text-lg font-semibold">info@cybershields.com</p>
                    </div>
                    <div>
                        <h3 className="text-gray-400 text-sm uppercase mb-2">Phone</h3>
                        <p className="text-lg font-semibold">+91 9315471293</p>
                    </div>
                    <div>
                        <h3 className="text-gray-400 text-sm uppercase mb-2">Location</h3>
                        <p className="text-lg font-semibold">T3, B1603, NXOne, Tech zone IV,<br />
                        Greater Noida, UP, 201306
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
