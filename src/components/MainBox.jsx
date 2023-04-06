import React from 'react'

function MainBox() {
  return (
    <div className="h-[100%] w-[98%] border-[3px] p-4 shadow-xl">
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-14 h-14"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <div className="mx-2">
        <div className="text-xl">Full Name</div>
        <div className="text-lg text-gray-600 mx-2 mt-[-6px]">@username</div>
      </div>
    </div>
    <div className="h-[10%] border w-[98%] border-gray-300 my-6 flex items-center justify-center">
    <div className="text-2xl my-4">Title goes here</div>
    </div>

    <div className="h-[60%] border w-[98%] border-gray-300 my-6 flex items-center justify-center">
    <div className="text-2xl my-4">Content goes here</div>
    </div>
    <div className="p-3 bg-emerald-700 text-white mx-3 flex justify-between"><div>0 Likes and 0 Comments</div> <div>12:04PM</div></div>
  </div>
  )
}

export default MainBox