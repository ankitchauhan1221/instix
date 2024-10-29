import React from 'react'
import Trad from '../assets/trade.jpg'

export default function Component() {
  const steps = [
    { number: 1, title: 'Register', description: 'Start by completing the KYC process to create your account.' },
    { number: 2, title: 'Verify', description: 'Mandatory account verification for security purposes.' },
    { number: 3, title: 'Trade', description: 'Once verified, enjoy seamless trading across various cryptocurrencies.' },
    { number: 4, title: 'Withdraw', description: 'Instantly withdraw funds, including USD, right after trading.' },
  ]

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">How InstiX Works?</h1>
      
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <img 
            src={Trad} 
            alt="Trading graph" 
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gray-700" />
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10 ${
                  step.number === 1 ? 'bg-yellow-500 animate-blink' : 'bg-gray-700'
                }`}
              >
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}