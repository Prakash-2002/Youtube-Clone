import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="App">
      <Navbar setSidebar={setSidebar} />

    
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/" element={<Home />} />
      </Routes>

  
    </div>
  );
}

export default App;
