import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Component() {
 const [email, setEmail] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()
  // Handle form submission here
  console.log('Submitted email:', email)
  setEmail('')
 }

 return (
  <div className="h-[50vh] flex items-center justify-center bg-black bg-opacity-90">
   <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
     Get The Latest Industry Updates!
    </h1>
    <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
     InstiX is a leading Over-the-Counter (OTC) platform designed to make
     cryptocurrency trading easier for institutions and large investors.
    </p>
    <form onSubmit={handleSubmit} className="flex justify-center">
     <div className="relative w-full max-w-md">
      <input
       type="email"
       placeholder="Enter Your Email ID"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="w-full px-4 py-3 pr-24 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
       required
      />
      <button
       type="submit"
       className="absolute right-1 top-1 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-300 flex items-center justify-center"
      >
       Submit
       <ArrowRight className="ml-1 h-4 w-4" />
      </button>
     </div>
    </form>
   </div>
  </div>
 )
}
