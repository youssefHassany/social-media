import { data } from "./data/data";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Feed from "./pages/feed/Feed";
import Friends from "./pages/friends/Friends";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [myData, setMyData] = useState(data);
  return (
    <div className="App w-full overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Feed myData={myData} setMyData={setMyData} />} />
        <Route path="/friends" element={<Friends myData={myData} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
