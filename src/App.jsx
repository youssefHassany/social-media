import { data } from "./data/data";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Feed from "./pages/feed/Feed";
import Friends from "./pages/friends/Friends";
import About from "./pages/About";
import { useState } from "react";
import Profile from "./pages/profile/Profile";

function App() {
  const [myData, setMyData] = useState(data);
  const [profileData, setProfileData] = useState([]);

  const clickProfile = (data) => {
    setProfileData(data);
  }
  return (
    <div className="App w-full overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Feed myData={myData} setMyData={setMyData} clickProfile={clickProfile} />} />
        <Route path="/friends" element={<Friends myData={myData} clickProfile={clickProfile} />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile profileData={profileData} />} />
      </Routes>
    </div>
  );
}

export default App;
