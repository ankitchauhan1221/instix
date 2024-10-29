import React from 'react'
import { ArrowRight } from 'lucide-react'
import Blog01 from '../assets/blog01.png'
import Blog02 from '../assets/blog02.png'
import Blog03 from '../assets/blog03.png'
import Blog04 from '../assets/blog04.png'

const blogPosts = [
  {
    title: "Teaching Note on Shriram Finance",
    description: "InstIX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    image: Blog01,
  },
  {
    title: "Dividend adjustment for stock derivatives",
    description: "InstIX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    image: Blog02,
  },
  {
    title: "Double win at FX DailyInfo Forex Brokers Award",
    description: "InstIX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    image: Blog03,
  },
  {
    title: "Best Professional Trading Platform",
    description: "InstIX is a leading Over-the-Counter (OTC) platform designed to make cryptocurrency.",
    image: Blog04,
  },
]

export default function BlogSection() {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Our Blogs</h2>
            <p className="text-gray-400">latest Trading blogs</p>
          </div>
          <button className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded-full text-sm flex items-center hover:bg-yellow-500 hover:text-black transition-colors">
            View All
            <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
      <ArrowRight className="h-4 w-4 text-black" />
    </div>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover border border-white rounded-[10px]"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {index === 1 ? (
                    <span className="text-yellow-500">{post.title}</span>
                  ) : (
                    post.title
                  )}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{post.description}</p>
                <button className="text-white border border-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors">
                  View More
                  <div className="ml-2 bg-white rounded-full p-1 inline-flex items-center justify-center">
      <ArrowRight className="h-4 w-4 text-black" />
    </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}