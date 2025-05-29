import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Projects from "./Projects";
import ReactFacts from "../Projects/ReactFacts-Project/Index";
import TravelJournal from "../Projects/TravelJournal-Project/index";
import ChefClaude from "../Projects/ChefClaude-Project";
import MemeGenerator from "../Projects/MemeGenerator-Project/Index";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/react-facts" element={<ReactFacts />} />
        <Route path="/travel-journal" element={<TravelJournal />} />
        <Route path="/chef-claude" element={<ChefClaude />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}
