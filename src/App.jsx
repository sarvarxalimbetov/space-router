import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Destination from "./pages/destination/destination";
import Crew from "./pages/crew/crew";
import Technology from "./pages/technology/technology";
import Layout from "./layout/layout";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import MoonPage from "./pages/destination/pages/moon-page/moon-page";
import MarsPage from "./pages/destination/pages/mars-page/mars-page";
import EuropaPage from "./pages/destination/pages/europa-page/europa-page";
import TitanPage from "./pages/destination/pages/titan-page/titan-page";
import Crew1 from './pages/crew/pages/crew-1/crew1'
import Crew2 from './pages/crew/pages/crew-2/crew2'
import Crew3 from './pages/crew/pages/crew-3/crew3'
import Crew4 from './pages/crew/pages/crew-4/crew4'
import Launch from './pages/technology/pages/launch/launch'
import Spaceport from './pages/technology/pages/spaceport/spaceport'
import SpaceCapsule from './pages/technology/pages/spcacecapsule/spacecapcule'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<MoonPage />} />
            <Route path="mars" element={<MarsPage />} />
            <Route path="europa" element={<EuropaPage />} />
            <Route path="titan" element={<TitanPage />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<Crew1 />} />
            <Route path="crew2" element={<Crew2 />} />
            <Route path="crew3" element={<Crew3 />} />
            <Route path="crew4" element={<Crew4 />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<Launch />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="spacecapsule" element={<SpaceCapsule />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
