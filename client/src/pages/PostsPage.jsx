import React from "react";
import PostDetailBox from "../components/PostDetailBox";
function PostsPage() {
  return (
    <div className="h-screen overflow-scroll">
      <div className="h-[60%] flex justify-center mt-8">
        <PostDetailBox />
      </div>

    </div>
  );
}

export default PostsPage;
