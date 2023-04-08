import React, { useEffect } from "react";
import Login from "../components/Login";

function LoginPage({setOutside, setLoggedIn}) {
  useEffect(() => {
    setOutside(true)
  })
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-emerald-800 border-t-yellow-950">
      <Login setOutside={setOutside} setLoggedIn={setLoggedIn}/>
      </div>
    </div>
  );
}

export default LoginPage;
