import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import Loader from "./components/Loader"
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/pokemon/:id" element={<PokemonPage />}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
/*
<Router>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
          </Suspense>
      </Router>*/
