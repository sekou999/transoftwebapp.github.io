// src/components/Footer.js
import React from 'react';

function DashboardFooter() {
  return (
    <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="text-muted">© Your Website 2023</div>
          <div>
            <a href="#privacy">Privacy Policy</a> &middot; <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DashboardFooter;
