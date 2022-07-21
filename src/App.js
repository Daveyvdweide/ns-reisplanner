import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Startpagina from "./components/Startpagina/Startpagina";
import Background from "./components/Background/Background";
import Verstoringen from './components/Verstoringen/Verstoringen';
import StationMap from "./components/StationMap/StationMap";

function App() {
  return (
    <div className="app" >
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Startpagina />} />
          <Route path="/verstoringen" element={<Verstoringen />} />
          <Route path="/stations" element={<StationMap />} />
        </Routes>
        <Background />
      </BrowserRouter>
    </div>
  );
}

export default App;
