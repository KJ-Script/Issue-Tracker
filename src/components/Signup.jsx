import React from "react";

function Signup() {
  return (
    <div className=" bg-white flex items-center justify-center rounded-2xl">
      <div className="justify-center mx-12 my-5">
        {/* Login: Name and Address */}
        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">FirstName</p>
          <input type="text" required className="border border-xl px-3" />
        </div>

        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">LastName</p>
          <input type="text" required className="border border-xl px-3" />
        </div>

        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">UserName</p>
          <input type="text" required className="border border-xl px-3" />
        </div>

        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">E-mail</p>
          <input type="email" required className="border border-xl px-3" />
        </div>

        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">Phone</p>
          <input type="phone" required className="border border-xl px-3" />
        </div>

        {/* Login: Password */}
        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">Password</p>
          <input type="Password" required className="border border-xl px-3" />
        </div>

        <div className="text-xl my-2 w-full">
          <p className="flex justify-center">Confirm Password</p>
          <input type="Password" required className="border border-xl px-3" />
        </div>

        <div className="my-4 w-full">
          <button className="w-full bg-emerald-800 text-white text-xl py-3">
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
