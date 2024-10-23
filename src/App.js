import React from "react";
// import "./App.css";
// import "./pages/Styles/Recherche.css";
// import "./pages/Styles/Contact.css";
// import "./pages/Styles/About.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recherche from "./pages/Recherche";
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import About from './pages/About';
import Inscription from "./pages/Inscription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Inscription /> */}
          <Route path="/" element={<Inscription />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recherche" element={<Recherche />} />
          {/* path="*" fonctionne si jamais on ajoute l'url ne correspond a rien de declarer au dessous  */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
