import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Good evening, Abdullah 👋</h1>
        <p className="text-gray-400 text-sm">Ready to grow your wealth?</p>
      </div>
      <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300">
        <i className="ri-notification-3-line text-gray-300"></i>
      </button>
    </div>
  )
}

export default Header
