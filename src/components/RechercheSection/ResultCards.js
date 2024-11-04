import React from 'react';
import styles from "./ResultCards.module.css";

function ResultCard({ company, departure, arrival, date, time, price }) {
  return (
    <div className={styles.resultCard}>
      {company && <h3>{company}</h3>}
      {departure && <p><strong>Départ :</strong> {departure}</p>}
      {arrival && <p><strong>Arrivée :</strong> {arrival}</p>}
      {date && <p><strong>Date :</strong> {date}</p>}
      {time && <p><strong>Heure :</strong> {time}</p>}
      {price && <p><strong>Prix :</strong> {price} 
      <button className={styles.reserveButton}>Réserver</button> </p>}
    </div>
  );
}

export default ResultCard;


// import React from 'react';
// import styles from "./ResultCards.module.css"

// function ResultCard({ company, departure, arrival, date, time, price }) {

//     return (
//     <div className={styles.resultCard}>
//       <h3>{company}</h3>
//       <p><strong>Départ :</strong> {departure}</p>
//       <p><strong>Arrivée :</strong> {arrival}</p>
//       <p><strong>Date :</strong> {date}</p>
//       <p><strong>Heure :</strong> {time}</p>
//       <p><strong>Prix :</strong> {price}</p>
//       <button className={styles.reserveButton}>Réserver</button>

//     </div>
    
//   );
// }

// export default ResultCard;