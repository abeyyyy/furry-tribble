
import './App.css';
import Home from "./screens/home"
import Grid from "./screens/grid"
import Error from "./screens/error"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-source" element={<Grid />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
