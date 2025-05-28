import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Projects from "./Projects";
import ReactFacts from "../Projects/ReactFacts-Project/Index";
import TravelJournal from "../Projects/TravelJournal-Project/index";
import ChefClaude from "../Projects/ChefClaude-Project";

export default function Layout() {

   const [count, setCount] = useState(0);
  
    const add = () => setCount((prevCount) => prevCount + 1);
    const sub = () => setCount((prevCount) => prevCount - 1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/react-facts" element={<ReactFacts />} />
        <Route path="/travel-journal" element={<TravelJournal />} />
        <Route path="/chef-claude" element={<ChefClaude />} />
      </Routes>
      <div className="flex items-center justify-center mt-5 gap-x-1 border rounded-lg w-1/2 mx-auto py-2 bg-[#2B283A]">
        <button onClick={sub}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </button> 
        <div className="size-[80px] bg-white text-[#2B283A] flex-center border rounded-full">
            <span className="text-2xl font-Inter font-bold ">{count}</span>
        </div>
        <button onClick={add}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
      </div>
    </BrowserRouter>
  );
}
