import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path={`${NAME_SITE}`} element={<Home />} />
            <Route path={`${NAME_SITE}favorites`} element={<Favorites />} />
            <Route path={`${NAME_SITE}pokemon/:id`} element={<PokemonDetail />} />
            <Route path={`${NAME_SITE}*`} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
