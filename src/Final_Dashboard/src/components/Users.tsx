import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X } from 'lucide-react';
import '../styles/Users.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive';
  lastLogin: string;
}

const initialUsers: User[] = [];
  // {
  //   id: '1',
  //   name: 'Jean Dupont',
  //   email: 'jean.dupont@example.com',
  //   role: 'admin',
  //   status: 'active',
  //   lastLogin: '2024-03-20 14:30'
  // },
  // {
  //   id: '2',
  //   name: 'Marie Martin',
  //   email: 'marie.martin@example.com',
  //   role: 'manager',
  //   status: 'active',
  //   lastLogin: '202-03-19 09:15'
  // },
 


const Users = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<Partial<User>>({});
  const [isEditing, setIsEditing] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setEditingUser({});
    setIsEditing(false);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData = {
      ...editingUser,
      id: editingUser.id || String(Date.now()),
      lastLogin: editingUser.lastLogin || new Date().toISOString()
    } as User;

    if (isEditing) {
      setUsers(users.map(user => 
        user.id === userData.id ? userData : user
      ));
    } else {
      setUsers([...users, userData]);
    }

    resetForm();
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (userId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h2>Gestion des Utilisateurs</h2>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="add-button"
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
          >
            <Plus size={20} />
            Ajouter un utilisateur
          </button>
        </div>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Utilisateur</th>
              <th>Email</th>
              <th>Rôle</th>
              <th>Statut</th>
              <th>Dernière connexion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.lastLogin}</td>
                <td className="actions">
                  <button 
                    className="icon-button edit"
                    onClick={() => handleEdit(user)}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    className="icon-button delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{isEditing ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}</h3>
              <button className="close-button" onClick={resetForm}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nom complet</label>
                <input
                  type="text"
                  value={editingUser.name || ''}
                  onChange={e => setEditingUser({...editingUser, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editingUser.email || ''}
                  onChange={e => setEditingUser({...editingUser, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Rôle</label>
                <select
                  value={editingUser.role || ''}
                  onChange={e => setEditingUser({...editingUser, role: e.target.value as User['role']})}
                  required
                >
                  <option value="">Sélectionner un rôle</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="user">Utilisateur</option>
                </select>
              </div>
              <div className="form-group">
                <label>Statut</label>
                <select
                  value={editingUser.status || ''}
                  onChange={e => setEditingUser({...editingUser, status: e.target.value as User['status']})}
                  required
                >
                  <option value="">Sélectionner un statut</option>
                  <option value="active">Actif</option>
                  <option value="inactive">Inactif</option>
                </select>
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-button">
                  {isEditing ? 'Modifier' : 'Ajouter'}
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={resetForm}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;