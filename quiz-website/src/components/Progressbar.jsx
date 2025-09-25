import React from 'react'

function Progressbar({currentQ, totalQ, className = ""}) {

  const percentageQ = Math.round((currentQ / totalQ) * 100);

  return (
    <div className={`w-full ${className}`}>
        <div className='flex justify-between items-center mb-2'>
            <span className='text-sm font-medium text-gray-700'>
                Question {currentQ} of {totalQ}
            </span>
            <span className='text-sm font-medium text-gray-700'>{percentageQ}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-3 overflow-hidden'>

            {/* ProgressBar */}
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full
            transition-all duration-500 ease-in-out shadow-sm' 
            style={{ width: `${percentageQ}%` }}/>

        </div>
    </div>
  )
}

export default Progressbar;