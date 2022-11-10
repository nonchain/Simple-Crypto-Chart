import React from 'react'
import Card from './components/Card'
import MultiCandlesChart from './components/MultiCandlesChart'
import CandlesFilter from './components/CandlesFilter'
import SingleCandlesChart from './components/SingleCandlesChart'

function App() {
  return (
    <div className="bg-gray-50 p-4 min-h-screen flex flex-col gap-3 md:grid md:grid-cols-3 md:grid-rows-2">
      <Card className='md:col-span-2'>
        <MultiCandlesChart />
      </Card>
      <Card className='order-3 md:col-span-1'>
        <SingleCandlesChart />
      </Card>
      <Card className='order-2 md:col-span-3 md:row-start-2'>
        <CandlesFilter />
      </Card>
    </div>
  )
}

export default App