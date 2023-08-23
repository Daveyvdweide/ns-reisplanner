import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Startpagina from "./components/Startpagina/Startpagina";
import Background from "./components/Background/Background";
import Overview from './components/Disruption/Overview/Overview';
import StationMap from "./components/StationMap/StationMap";

function App() {
  return (
    <div className="app" >
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Startpagina />} />
          <Route path="/verstoringen" element={<Overview />} />
          <Route path="/stations" element={<StationMap />} />
        </Routes>
        <Background />
      </BrowserRouter>
    </div>
  );
}

export default App;
