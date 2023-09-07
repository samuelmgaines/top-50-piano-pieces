import Home from './Home'
import Navbar from './Navbar'
import Rate from './Rate'
import Rank from './Rank'
import Results from './Results'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rate" element={<Rate />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
