import React from "react";
// import "./Styles/Home.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Compagnies/Companies";
import Footer from "../components/Footer/Footer";

// import FormInscription from "../components/FormInscription";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Footer />
    </div>
  );
};

export default Home;
