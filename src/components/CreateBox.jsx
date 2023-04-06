import React from "react";

function CreateBox() {
  return (
    <div className="h-[60%] w-[50%] border-[3px] shadow-xl">
      <div className="h-full w-full flex flex-col items-center my-6">
        <input
          className="w-[90%] p-4 h-[10%] border-[3px] text-xl"
          type="text"
          placeholder="PUT TITLE HERE"
        />
        <textarea
          className="w-[90%] p-4 h-[50%] my-4 border-[3px] text-lg"
          placeholder="CONTENT GOES HERE"
        />
        <div className="w-full flex justify-center my-3">
      <button className="px-2 py-4 bg-emerald-600 text-white w-[45%] mx-3">ADD IMAGE</button>
      <button className="px-2 py-4 bg-emerald-600 text-white w-[45%]">ATTACH FILE</button>

        </div>
      <button className="px-2 py-4 bg-emerald-600 text-white w-[95%]">POST</button>
      </div>

    </div>
  );
}

export default CreateBox;
