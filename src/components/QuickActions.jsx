import React from 'react'

const QuickActions = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="font-medium rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 px-6 py-3 text-base h-16 flex flex-col items-center justify-center space-y-1">
          <i className="ri-rocket-fill text-xl"></i>
          <span className="text-sm">Missions</span>
        </button>
        
        <button className="font-medium rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 px-6 py-3 text-base h-16 flex flex-col items-center justify-center space-y-1">
          <i className="ri-robot-fill text-xl"></i>
          <span className="text-sm">AI Coach</span>
        </button>
        
        <button className="font-medium rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 px-6 py-3 text-base h-16 flex flex-col items-center justify-center space-y-1">
          <i className="ri-send-plane-fill text-xl"></i>
          <span className="text-sm">Send</span>
        </button>
        
        <button className="font-medium rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 px-6 py-3 text-base h-16 flex flex-col items-center justify-center space-y-1">
          <i className="ri-line-chart-fill text-xl"></i>
          <span className="text-sm">Track</span>
        </button>
      </div>
    </>
  )
}

export default QuickActions
