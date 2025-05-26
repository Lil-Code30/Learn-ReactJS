import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Projects from "./Projects";
import ReactFacts from "../Projects/ReactFacts-Project/Index";
import Test from "../Projects/test/Test";

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/react-facts" element={<ReactFacts />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
