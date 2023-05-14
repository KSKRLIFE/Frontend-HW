import Navbar from "./Navbar";
import Charts from "./Pages/Charts";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Charts" element={<Charts />} />
        </Routes>
      </div>
    </>
  );
}
