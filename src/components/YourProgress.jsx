import React from 'react'

const YourProgress = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white mb-4">Your Progress</h3>
      <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-400">7</div>
            <div className="text-gray-400 text-xs">Day Streak</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">1,250</div>
            <div className="text-gray-400 text-xs">XP Points</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">12</div>
            <div className="text-gray-400 text-xs">Badges</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm">Level Progress</span>
            <span className="text-emerald-400 text-sm">Level 5</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default YourProgress
