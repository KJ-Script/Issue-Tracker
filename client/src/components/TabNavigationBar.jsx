import React from "react";
import { useNavigate } from "react-router-dom";

function TabNavigationBar({ outside }) {
  const navigate = useNavigate()
  return outside ? (
    <></>
  ) : (
    <div className="w-full flex justify-center my-12">
      <div className="w-[45%] flex justify-center items-center shadow-md shadow-emerald-700 h-[60px]">
        <div className="flex justify-between items-center w-[40%] text-2xl h-full">
            <div className="hover:px-3 hover:bg-emerald-700 hover:text-white hover:h-full hover:flex hover:items-center focus:px-3 focus:bg-emerald-700" onClick={() => {
            navigate('/home')
            }}>ISSUES</div>
            <div className="hover:px-3 hover:bg-emerald-700 hover:text-white hover:h-full hover:flex hover:items-center" onClick={() => {
            navigate('/create')
            }}>CREATE</div>
            <div className="hover:px-3 hover:bg-emerald-700 hover:text-white hover:h-full hover:flex hover:items-center" onClick={() => {
            navigate('/tickets')
            }}>BOOKMARKS</div>
            <div className="hover:px-3 hover:bg-emerald-700 hover:text-white hover:h-full hover:flex hover:items-center" onClick={() => {
            navigate('/myposts')
            }}>FEED</div>
        </div>
      </div>
    </div>
  );
}

export default TabNavigationBar;
