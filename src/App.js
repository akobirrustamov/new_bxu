import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage"; // Fixed import
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;