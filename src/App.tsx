import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import { JurassicPark } from "./pages/jurassicPark/JurassicPark.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jurassic" element={<JurassicPark />} />
      </Routes>
    </BrowserRouter>
  );
}
