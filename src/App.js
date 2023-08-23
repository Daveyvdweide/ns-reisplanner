import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Startpagina from "./components/Startpagina/Startpagina";
import Background from "./components/Background/Background";
import Overview from './components/Disruption/Overview/Overview';

function App() {
  return (
    <div className="app" >
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Startpagina />} />
          <Route path="/verstoringen" element={<Overview />} />
        </Routes>
        <Background />
      </BrowserRouter>
    </div>
  );
}

export default App;
