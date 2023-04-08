import React from "react";
import { useNavigate } from "react-router-dom";

function Login({setLoggedIn, setOutside}) {
  const navigate = useNavigate()
  return (
    <div className=" bg-white flex items-center justify-center rounded-2xl">
      <div className="justify-center mx-12 my-5">
        {/* Login: UserName */}
        <div className="text-xl my-2">
          <p className="flex justify-center">Username</p>
          <input type="text" required className="border border-xl px-3" />
        </div>

        {/* Login: Password */}
        <div className="text-xl my-2">
          <p className="flex justify-center">Password</p>
          <input type="Password" required className="border border-xl px-3" />
        </div>

        <div className="my-4">
          <button className="w-full bg-emerald-800 text-white text-xl py-3" onClick={() => {
            setLoggedIn(true)
            setOutside(false)
            navigate('/home')
          }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
