import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetups />} />
            <Route path="/new-meetups" element={<NewMeetups />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesContextProvider>
  );
}

export default App;
