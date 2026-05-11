import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveCCTV from "./pages/LiveCCTV";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cctv" element={<LiveCCTV />} />
        <Route path="/laporan" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;