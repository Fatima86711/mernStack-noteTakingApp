import React from 'react'
import { Zap } from 'lucide-react';
const RateLimitedUi = () => {
  return (
    <div className='max-w-4xl mx-auto px-4  py-4  '>
        <div className=' border-1  bg-base-100 rounded-2xl  shadow-md px-4 py-8 border-base-content/20'>
        <div className=' flex   flex-shrink-0 flex-col items-center md:flex-row p-4  gap-10' >
             <div className='btn  shadow-xl shadow-neutral size-30 mb-4 md:mb-0 bg-neutral btn-circle' >
                <Zap className='size-20 text-neutral-content/100'/>
            </div>
            <div className='flex-1  text-center md:text-left'   >
                <h1 className='text-xl font-bold mb-2' >Rate Limit Reached</h1>
                <h2 className='font-bold mb-1 text-warning-content/80' >You've made too many requests in short period of time. Please wait a moment.</h2>
                <h3 className='text-sm text-warning-content/70 ' >Try again in few seconds for the best experience.</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RateLimitedUi