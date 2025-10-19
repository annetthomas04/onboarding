import React from 'react'

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-800 z-50">
      <div className="grid grid-cols-4 h-20">
        <button className="flex flex-col items-center justify-center space-y-1 transition-all duration-300 text-emerald-400">
          <div className="w-6 h-6 flex items-center justify-center scale-110">
            <i className="ri-home-4-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Home</span>
          <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 transition-all duration-300 text-gray-500 hover:text-gray-300">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-rocket-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Missions</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 transition-all duration-300 text-gray-500 hover:text-gray-300">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-gift-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Rewards</span>
        </button>
        
        <button className="flex flex-col items-center justify-center space-y-1 transition-all duration-300 text-gray-500 hover:text-gray-300">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-user-fill text-xl"></i>
          </div>
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  )
}

export default BottomNavigation
