import React from 'react'

const LearningPath = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Learning Path</h3>
        <button className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors duration-300">View All</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 min-w-48 p-4 relative">
          <img 
            alt="Budgeting 101" 
            className="w-full h-20 object-cover rounded-lg mb-3" 
            src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20budget%20planning%20with%20calculator%2C%20charts%2C%20and%20coins%2C%20dark%20background%20with%20purple%20accents%2C%20modern%20financial%20education%20design%2C%20clean%20minimalist%20style&width=200&height=120&seq=4&orientation=landscape"
          />
          <h4 className="text-white font-medium text-sm mb-1">Budgeting 101</h4>
          <p className="text-gray-400 text-xs mb-3">Master the basics</p>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div className="bg-emerald-400 h-1 rounded-full transition-all duration-300" style={{width: '60%'}}></div>
          </div>
        </div>
        
        <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 min-w-48 p-4 relative">
          <img 
            alt="Invest Smart" 
            className="w-full h-20 object-cover rounded-lg mb-3" 
            src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20investment%20growth%20with%20upward%20trending%20charts%2C%20stocks%2C%20and%20money%20trees%2C%20dark%20gradient%20background%2C%20professional%20financial%20design&width=200&height=120&seq=5&orientation=landscape"
          />
          <h4 className="text-white font-medium text-sm mb-1">Invest Smart</h4>
          <p className="text-gray-400 text-xs mb-3">Build your portfolio</p>
        </div>
        
        <div className="rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 min-w-48 p-4 relative">
          <div className="absolute top-2 right-2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
            <i className="ri-lock-fill text-xs text-gray-400"></i>
          </div>
          <img 
            alt="Credit Score Basics" 
            className="w-full h-20 object-cover rounded-lg mb-3" 
            src="https://readdy.ai/api/search-image?query=3D%20illustration%20of%20credit%20score%20improvement%20with%20rating%20stars%20and%20financial%20documents%2C%20dark%20background%20with%20gold%20accents%2C%20premium%20design&width=200&height=120&seq=6&orientation=landscape"
          />
          <h4 className="text-white font-medium text-sm mb-1">Credit Score Basics</h4>
          <p className="text-gray-400 text-xs mb-3">Improve your rating</p>
        </div>
      </div>
    </>
  )
}

export default LearningPath
