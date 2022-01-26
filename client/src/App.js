import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Coin from "./components/Coin/Coin.js";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/about" element={<About />} />
        <Route path="/config" element={<p>Config</p>} />
      </Routes>
    </div>
  );
}

export default App;
