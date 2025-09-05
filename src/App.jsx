// App.jsx
import "./App.css";
import Aboutme from "./components/Aboutme";
import AllpostPage from "./components/AllpostPage";
import HeaderComp from "./components/HeaderComp";
import Metamorpage from "./components/Metamorpage";
import Newspage from "./components/Newspage";

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/page1" element={<Metamorpage />} />
        <Route path="/page2" element={<AllpostPage />} />
        <Route path="/page3" element={<Aboutme />} />
        <Route path="/page4" element={<Newspage />} />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <HeaderComp />}
      <AnimatedRoutes />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;