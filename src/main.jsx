import { createRoot } from "react-dom/client";

import "./styles.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Header /> */}
    {/* <MainContent /> */}
    <Layout />
    <Footer />
  </>,
);
