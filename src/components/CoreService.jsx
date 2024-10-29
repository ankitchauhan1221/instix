import React, { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "InstiX's OTC RFQ",
    description: "The OTC RFQ feature brings transparency and flexibility to InstiX by allowing users to easily request specific prices for large trades. It empowers institutional investors...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "InstiX's RFS",
    description: "The RFS (Request for Stream) feature delivers real-time pricing for large trades so that users can access continuous price streams. The feature ensures optimal rate...",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Liquidity Provider",
    description: "InstiX connects users with top-tier liquidity providers for the efficient execution of large trades – a setup that guarantees competitive pricing and reliable access to a wide range...",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9IjAuMiI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
      <h1 className="relative text-4xl md:text-5xl font-bold text-center mb-12">InstiX's Core Services</h1>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img src={slide.image} alt={slide.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{slide.description}</p>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-yellow-600 transition-colors">
                  <span>View More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}