import React from 'react'

const DailyTips = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white mb-4">Daily Financial Tips</h3>
      <div className="relative">
        <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 p-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            <i className="ri-lightbulb-fill text-2xl mb-3 block"></i>
          </div>
          <h4 className="text-white font-semibold mb-2">Smart Spending Tip</h4>
          <p className="text-gray-300 text-sm">Track your daily coffee expenses - small changes lead to big savings!</p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button className="w-2 h-2 rounded-full transition-all duration-300 bg-emerald-400"></button>
          <button className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-600"></button>
          <button className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-600"></button>
        </div>
      </div>
    </>
  )
}

export default DailyTips
