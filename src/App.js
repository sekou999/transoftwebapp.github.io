import React from "react";
<<<<<<< HEAD
// import "./App.css";
// import "./pages/Styles/Recherche.css";
// import "./pages/Styles/Contact.css";
// import "./pages/Styles/About.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
import Recherche from "./pages/Recherche";
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import About from './pages/About';
import Inscription from "./pages/Inscription";
<<<<<<< HEAD

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Inscription /> */}
          <Route path="/home" element={<Home />} />
=======
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
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
          <Route path="/recherche" element={<Recherche />} />
          {/* path="*" fonctionne si jamais on ajoute l'url ne correspond a rien de declarer au dessous  */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/connexion" element={<Inscription />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
=======
          <Route path="*" element={<Accueil />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
>>>>>>> 17fb87993fd7be3893e720356ca62f90e1d5ee86
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
