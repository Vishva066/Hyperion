// app/role-selection/page.js

'use client';

import { useState } from 'react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { useRouter } from 'next/navigation';  // Import useRouter
import styles from '../styles/role.module.css';

export default function RolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const { address } = useWeb3ModalAccount();
  const router = useRouter();  // Initialize router

  const handleCreateOfferClick = () => {
    router.push('/create');  // Navigate to the create offer page
  };

  const handleViewOfferClick = () => {
    router.push('/view');  // Navigate to the create offer page
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);

    if (role === 'consumer') {
      // Set the role to consumer and route to offers page
      setSelectedRole('consumer');
      router.push('/offers');
    }
  };

  return (
    <div className={styles.container}>
      <h1>{address}</h1>
      <h1>Select Your Role</h1>
      <div className={styles.roles}>
        <div
          className={`${styles.roleCard} ${selectedRole === 'producer' ? styles.selected : ''}`}
          onClick={() => handleRoleSelect('producer')}
        >
          Producer
        </div>
        <div
          className={`${styles.roleCard} ${selectedRole === 'consumer' ? styles.selected : ''}`}
          onClick={() => handleRoleSelect('consumer')}
        >
          Consumer
        </div>
      </div>

      {selectedRole === 'producer' && (
        <div className={styles.optionsContainer}>
          <h2>Producer Options</h2>
          <div className={styles.options}>
            <button className={styles.optionButton} onClick={handleCreateOfferClick}>
              Create Offer
            </button>
            <button className={styles.optionButton} onClick={handleViewOfferClick}>
              View Offers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
