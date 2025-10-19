import React from 'react'

const RuwaCard = () => {
  return (
    <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-emerald-400/20 p-6 mb-6 transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-emerald-400 to-cyan-400">
      <div className="flex flex-col h-32">
        <div className="flex items-center justify-between mb-4">
          <div className="text-black font-bold text-lg">Ruwa Card</div>
          <div className="flex space-x-1">
            <div className="w-8 h-5 bg-black/20 rounded-sm"></div>
            <div className="w-8 h-5 bg-black/30 rounded-sm"></div>
          </div>
        </div>
        <div className="text-black font-mono text-lg mb-4 tracking-wider">**** **** **** 4829</div>
        <div className="flex items-end justify-between mt-auto">
          <div>
            <div className="text-black/70 text-xs">BALANCE</div>
            <div className="text-black font-bold text-2xl">AED 12,450</div>
          </div>
          <div className="text-right">
            <div className="text-black/70 text-xs">HOLDER</div>
            <div className="text-black font-semibold text-sm">ABDULLAH AL-RASHID</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RuwaCard
