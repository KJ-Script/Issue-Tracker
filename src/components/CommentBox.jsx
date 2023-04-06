import React from 'react'

function CommentBox() {
  return (
    <div className="h-[20%] w-[98%] border-[3px] p-4 shadow-xl mt-2">
      <div className="mx-2 mb-2 flex">
        <div className="text-xl">Full Name</div>
        <div className="text-lg text-gray-600 mx-2">@username</div>
    </div>
    <div className="h-[60%] border w-[98%] border-gray-300 flex items-center justify-center">
    <div className="text-2xl my-4">Comment goes here</div>
    </div>
  </div>
  )
}

export default CommentBox