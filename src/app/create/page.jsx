// app/create/page.js

'use client';

import { useState } from 'react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import styles from '../styles/create.module.css';

export default function CreateOfferPage() {
  const { address } = useWeb3ModalAccount();

  const [quantity, setQuantity] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [minQuantity, setMinQuantity] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const offerDetails = {
      seller: address,
      quantity,
      pricePerUnit,
      minQuantity,
      duration,
    };

    console.log('Offer Details:', offerDetails);
    // Handle the submission logic (e.g., send data to a smart contract)
  };

  return (
    <div className={styles.container}>
      <h1>Create Offer</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="seller">Seller (Your Address)</label>
          <input type="text" id="seller" value={address} readOnly />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="pricePerUnit">Price Per Unit</label>
          <input
            type="number"
            id="pricePerUnit"
            value={pricePerUnit}
            onChange={(e) => setPricePerUnit(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="minQuantity">Minimum Quantity</label>
          <input
            type="number"
            id="minQuantity"
            value={minQuantity}
            onChange={(e) => setMinQuantity(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="duration">Duration (in hours)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Offer
        </button>
      </form>
    </div>
  );
}
