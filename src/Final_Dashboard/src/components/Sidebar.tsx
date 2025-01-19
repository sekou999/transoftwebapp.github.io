import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Bus, Calendar, Building2, Users } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <LayoutDashboard size={20} />
          Vue d'ensemble
        </NavLink>
        <NavLink 
          to="/reservations" 
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <Calendar size={20} />
          Gestion des Reservations
        </NavLink>
        <NavLink 
          to="/vehicles" 
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <Bus size={20} />
          Gestions des Véhicules et Trajets
        </NavLink>
        <NavLink 
          to="/companies" 
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <Building2 size={20} />
          Compagnies de transport
        </NavLink>
        <NavLink 
          to="/users" 
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <Users size={20} />
          Gestion des Utilisateurs
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;