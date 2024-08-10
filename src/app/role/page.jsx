// app/role-selection/page.js

import { useState } from 'react';
import styles from '../styles/role.module.css';

export default function RolePage() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    
    <div className={styles.container}>
      <h1>Select Your Role</h1>
      <div className={styles.roles}>
        <div
          className={`${styles.roleCard} ${selectedRole === 'producer' ? styles.selected : ''}`}
          onClick={() => setSelectedRole('producer')}
        >
          Producer
        </div>
        <div
          className={`${styles.roleCard} ${selectedRole === 'consumer' ? styles.selected : ''}`}
          onClick={() => setSelectedRole('consumer')}
        >
          Consumer
        </div>
      </div>
    </div>
  );
}
