import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
