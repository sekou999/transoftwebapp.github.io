import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recherche from "./pages/Recherche";
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import About from './pages/About';
import Inscription from "./pages/Inscription";
import Accueil from "./pages/Accueil";
import Dashboard from "./pages/DashBoard";
import { AuthProvider } from '../src/components/Security/AuthContext';



const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route>
          {/* <Inscription /> */}
          <Route path="/connexion" element={<Inscription />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/recherche" element={<Recherche />} />
          {/* path="*" fonctionne si jamais on ajoute l'url ne correspond a rien de declarer au dessous  */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Accueil />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
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
