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


/* ==============================================================*/

/*import "./App.css";
import Aboutme from "./components/Aboutme";
import AllpostPage from "./components/AllpostPage";
import HeaderComp from "./components/HeaderComp";
import Bottom from "./components/Bottom";
import Metamorpage from "./components/Metamorpage";
import Newspage from "./components/Newspage";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Metamorpage/>}/>
          <Route path="/page2" element={<AllpostPage/>}/>
          <Route path="/page3" element={<Aboutme/>}/>
          <Route path="/page4" element={<Newspage/>}/>
        </Routes>
      </Router>
  );
}


export default App;*/


/* ==============================================================*/



/*
    <div className="page-1">

      <HeaderComp />
      <Metamorpage />
      <Bottom />
    </div>*/



/*    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
