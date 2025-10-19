import React from 'react'
import Header from './components/Header'
import RuyaCard from './components/RuyaCard'
import DailyTips from './components/DailyTips'
import LearningPath from './components/LearningPath'
import QuickActions from './components/QuickActions'
import YourProgress from './components/YourProgress'
import BottomNavigation from './components/BottomNavigation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-24">
      <div className="pt-12 px-6 pb-6">
        <Header />
        <RuyaCard />
      </div>
      
      <div className="px-6 mb-8">
        <DailyTips />
      </div>
      
      <div className="px-6 mb-8">
        <LearningPath />
      </div>
      
      <div className="px-6 mb-8">
        <QuickActions />
      </div>
      
      <div className="px-6 mb-8">
        <YourProgress />
      </div>
      
      <BottomNavigation />
    </div>
  )
}

export default App
