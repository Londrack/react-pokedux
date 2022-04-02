import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route path="/react-pokedux/" element={<Home />} />
            <Route path="/react-pokedux/favorites" element={<Favorites />} />
            <Route path="/react-pokedux/pokemon/:id" element={<PokemonDetail />} />
            <Route path="react-pokedux/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
