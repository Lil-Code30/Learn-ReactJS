import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Projects from "./Projects";
import ReactFacts from "../Projects/ReactFacts-Project/Index";
import TravelJournal from "../Projects/TravelJournal-Project/index";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/react-facts" element={<ReactFacts />} />
        <Route path="/travel-journal" element={<TravelJournal />} />
      </Routes>
    </BrowserRouter>
  );
}
