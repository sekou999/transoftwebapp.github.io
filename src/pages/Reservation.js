import React from "react";
import "./Styles/Reservation.css";
import Navbar from "../components/Navbar/Navbar";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import Footer from "../components/Footer/Footer";

const Reservation = () => {
  return (
    <div>
      <Navbar />
      <ReservationForm />
      <Footer />
    </div>
  );
};

export default Reservation;
