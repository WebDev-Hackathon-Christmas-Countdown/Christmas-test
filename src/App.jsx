/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarDoors from "./components/CalendarDoors";
import CalendarWindows from "./components/CalendarWindows";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar_doors" element={<CalendarDoors />} />
        <Route path="/calendar_windows" element={<CalendarWindows />} />
      </Routes>
    </div>
  );
}

export default App;
