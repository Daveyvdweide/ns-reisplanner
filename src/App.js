import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Background from "./components/Background/Background";
import Overview from './components/Disruption/Overview/Overview';

function App() {
  return (
    <div className="app" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/verstoringen" element={<Overview />} />
        </Routes>
        <Background />
      </BrowserRouter>
    </div>
  );
}

export default App;
