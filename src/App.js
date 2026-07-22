import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Technology from './pages/Technology';
import Academy from './pages/Academy';
import Impact from './pages/Impact';
import Careers from './pages/Careers';
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/ic" element={<Academy />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
