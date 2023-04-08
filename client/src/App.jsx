import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import TabNavigationBar from "./components/TabNavigationBar";
import PostsPage from "./pages/PostsPage";
import CreatePage from "./pages/CreatePage";
import BookmarksPage from "./pages/BookmarksPage";
import MyPostsPage from "./pages/MyPostsPage";

function App() {
  const [outside, setOutside] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <div className="font-outfit">
      <Router>
        <NavigationBar outside={outside}/>
        <TabNavigationBar outside={outside} />
        <Routes>
          <Route exact path="/" element={<LoginPage setLoggedIn={setLoggedIn} setOutside={setOutside}/>} />
          <Route exact path="/signup" element={<SignupPage setOutside={setOutside}/>} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/post" element={<PostsPage />} />
          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/tickets" element={<BookmarksPage />} />
          <Route exact path="/myposts" element={<MyPostsPage />} />



          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
