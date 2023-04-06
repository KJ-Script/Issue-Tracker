import React from "react";
import PostBox from "./PostBox";
import UtilityBox from "./UtilityBox";

function ContentBox() {
  return (
    <div className="w-[60%] flex justify-between">
      <PostBox />
      <UtilityBox/>

    </div>
  );
}

export default ContentBox;
