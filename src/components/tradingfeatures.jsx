import React from "react"
export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-5xl font-bold">What Sets the instiX OTC Platform ahead !!</span>
        </div>
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-zinc-900 to-[#270c02] p-[3rem] rounded-lg h-[250px] flex flex-col ">
            <h2 className="text-[1.2rem] font-semibold mb-2">Institutional Focus</h2>
            <p className="text-[1.1rem] text-zinc-400 line-clamp-4">
              Execute large transactions effectively on InstiX like Breeze as the platform is dedicated to serving institutional investors, with the sole aim of provi...
            </p>
          </div>
          <div className="col-span-3 row-span-2 bg-gradient-to-br from-zinc-900 to-[#270c02] p-[3rem] rounded-lg h-[250px] flex flex-col ">
            <h2 className="text-[1.2rem] font-regular mb-2 text-yellow-500">Seamless Large-Volume Trading</h2>
            <p className="text-[1.1rem] text-zinc-400">
              With the capability to handle significant trades—such as 100 BTC at a single price—InstiX facilitates efficient trading for high net-worth individuals and institutions without the constraints typically found on other platforms.
            </p>
          </div>
          <div className="col-span-3 row-span-3 bg-gradient-to-br from-zinc-900 to-[#270c02] p-[3rem] rounded-lg h-[250px] flex flex-col ">
            <h2 className="text-[1.2rem] font-semibold mb-2">User-Centric Support and Security</h2>
            <p className="text-[1.1rem] text-zinc-400">
              Licensed in Poland, InstiX prioritizes user security and satisfaction, offering 24/7 support, zero transaction fees on high-traction trades, and instant withdrawals – All for creating a reliable and efficient trading experience.
            </p>
          </div>
          <div className="col-span-2 row-span-3 bg-gradient-to-br from-zinc-900 to-[#270c02] p-[3rem] rounded-lg h-[250px] flex flex-col ">
            <h2 className="text-[1.2rem] font-semibold mb-2">Optimized Liquidity Solutions</h2>
            <p className="text-[1.1rem] text-zinc-400">
              InstiX employs a Request for Quote (RFQ) and Request for Stream (RFS) model to guarantee optimal liquidity to support the best trading flexibility and execution s...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
