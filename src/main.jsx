import { createRoot } from "react-dom/client";

import "./styles.css";


import Layout from "./components/Layout";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Layout />
    
  </>,
);
