import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import InputData from "./pages/InputData";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/InputData" element={<InputData />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
