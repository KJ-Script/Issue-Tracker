import React, {useEffect} from "react";
import Signup from "../components/Signup";

function SignupPage({setOutside}) {
  useEffect(() => {
    setOutside(true);
  });
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-emerald-800 border-t-yellow-950">
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;
