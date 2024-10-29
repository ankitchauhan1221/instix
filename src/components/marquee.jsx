import { useEffect, useRef, useState } from 'react'

// Define marqueeData as an array of objects directly
const marqueeData = [
  { icon: 'gold', code: 'BNB 565215203', value: '+9252 +652' },
  { icon: 'blue', code: 'TATA 256015', value: '+92 +052' },
  { icon: 'gold', code: 'BNB 565215203', value: '+9252 +652' },
  { icon: 'blue', code: 'TATA 256015', value: '+92 +052' },
  { icon: 'gold', code: 'BNB 565215203', value: '+9252 +652' },
  { icon: 'blue', code: 'TATA 256015', value: '+92 +052' },
]

export default function Component() {
  const [items, setItems] = useState([])
  const marqueeRef1 = useRef(null)
  const marqueeRef2 = useRef(null)

  useEffect(() => {
    setItems([...marqueeData, ...marqueeData])
  }, [])

  useEffect(() => {
    const marquee1 = marqueeRef1.current
    const marquee2 = marqueeRef2.current
    if (!marquee1 || !marquee2) return

    let animationId1
    let animationId2

    const animateMarquee = (marquee, direction, animationIdSetter) => {
      let startTime = null

      const animate = (timestamp) => {
        if (startTime === null) startTime = timestamp
        const progress = (timestamp - startTime) / 50 * direction

        marquee.style.transform = `translateX(${progress}px)`

        if (Math.abs(progress) >= marquee.offsetWidth / 2) {
          startTime = timestamp
        }

        animationIdSetter(requestAnimationFrame(animate))
      }

      animationIdSetter(requestAnimationFrame(animate))
    }

    animateMarquee(marquee1, -1, (id) => (animationId1 = id))
    animateMarquee(marquee2, 1, (id) => (animationId2 = id))

    return () => {
      cancelAnimationFrame(animationId1)
      cancelAnimationFrame(animationId2)
    }
  }, [items])

  return (
    <div className="w-full  py-4 space-y-4">
      <div className="overflow-hidden">
        <div ref={marqueeRef1} className="flex whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`top-${index}`} className="flex items-center border-gray-100 border-[1px] p-3 bg-100  rounded-full mr-8">
              <div
                className={`w-6 h-6 rounded-full ${item.icon === 'gold' ? 'bg-yellow-500' : 'bg-blue-500'} mr-2`}
              ></div>
              <span className="text-white font-medium mr-2">{item.code}</span>
              <span className="text-green-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div ref={marqueeRef2} className="flex whitespace-nowrap">
          {items.map((item, index) => (
            <div key={`bottom-${index}`} className="flex items-center border-gray-100 border-[1px] p-3 bg-100  rounded-full mr-8">
              <div
                className={`w-6 h-6 rounded-full ${item.icon === 'gold' ? 'bg-yellow-500' : 'bg-blue-500'} mr-2`}
              ></div>
              <span className="text-white font-medium mr-2">{item.code}</span>
              <span className="text-green-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
