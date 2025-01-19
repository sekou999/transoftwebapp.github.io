// src/components/Card.js
import React from 'react';
import styles from './Dashboard.module.css';
function DashboardCard({ title, color, link }) {
  return (
    <div className={styles.card}>
        {color}
      <div className={styles.cardbody}>{title}</div>
      {/* "card-footer d-flex justify-content-between" */}
      <div className={styles.cardFooter}>
      {/* "small text-white stretched-link" */}
        <a href={link} className={styles.viewDetails}>View Details</a>
        {/* "small text-white" */}
        <div className={styles.angleIcon}><i className="fas fa-angle-right"></i></div>
      </div>
    </div>
  );
}

export default DashboardCard;
