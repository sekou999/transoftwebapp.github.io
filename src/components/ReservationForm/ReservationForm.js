import React from "react";
import styles from "./ReservationForm.module.css"; // Import des styles CSS Modules

function ReservationForm() {
  return (
    <div className={styles.containerB}>
      <h2 className={styles.title}>Réservation de Voyage</h2>
      <form className={styles.reservationForm}>
        <div className={styles.formGroup}>
          <label htmlFor="depart">Ville de départ:</label>
          <input type="text" id="depart" name="depart" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="destination">Ville de destination:</label>
          <input type="text" id="destination" name="destination" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date de voyage:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="passengers">Nombre de passagers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            max="5"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="company">Compagnie de transport:</label>
          <select id="company" name="company">
            <option value="">Choisissez une Compagnie</option>
            <option value="sonef">SONEF TRANS</option>
            <option value="diarra">DIARRA TRANS</option>
            <option value="africa">AFRICA TOUR TRANS</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>Réserver</button>
      </form>
    </div>
  );
}

export default ReservationForm;
