import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tournament from "./pages/Tournament";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament/:id" element={<Tournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
