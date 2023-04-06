import React from 'react'
import ContentBox from '../components/ContentBox'

function HomePage() {
  return (
    <div className="h-screen overflow-scroll">
    <div className='h-[30%] flex justify-center mt-8'>
        <ContentBox/>
    </div>

    <div className='h-[30%] flex justify-center mt-8'>
        <ContentBox/>
    </div>

    <div className='h-[30%] flex justify-center mt-8'>
        <ContentBox/>
    </div>

    <div className='h-[30%] flex justify-center mt-8'>
        <ContentBox/>
    </div>

    <div className='h-[30%] flex justify-center mt-8'>
        <ContentBox/>
    </div>

    </div>
  )
}

export default HomePage