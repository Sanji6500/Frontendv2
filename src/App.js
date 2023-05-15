import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashborad/Dashboard";
import { FatherAndSonKamahamihaaaa } from "./components/FatherAndSonKamahamihaaaa";

function App() {
  return (
    <Router>
      <FatherAndSonKamahamihaaaa />

      <div className="  ease-in-out duration-300   md:pl-[210px] h-full   pt-[65px]    ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
