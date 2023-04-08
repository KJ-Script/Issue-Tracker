import React from 'react'
import PostContentBox from './PostContentBox'
import UtilityBox from './UtilityBox'

function PostDetailBox() {
  return (
    <div className="w-[60%] h-full flex justify-between items-center">
    <PostContentBox />
    <UtilityBox />   
 </div>
  )
}

export default PostDetailBox