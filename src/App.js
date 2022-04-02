import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { NAME_SITE } from "./api/config";

import { Favorites } from "./pages/Favorites";
import { PokemonDetail } from "./pages/PokemonDetail";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <Router>
      <div className="centerContainer w-full max-w-7xl mx-auto min-h-screen">
        <div className="w-11/12 max-w-5xl bg-white min-h-screen mx-auto px-6 py-5">
          <Header />
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/favorites`} element={<Favorites />} />
            <Route path={`/pokemon/:id`} element={<PokemonDetail />} />
            <Route path={`/*`} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
