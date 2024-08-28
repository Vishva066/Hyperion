'use client';

import { useEffect, useState } from 'react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import styles from '../styles/view-offers.module.css';

export default function ViewOffersPage() {
  const [offers, setOffers] = useState([]);
  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    async function fetchOffers() {
      if (!address) return;

      // Replace the following code with the actual logic to fetch offers from your smart contract
      // Assuming a function `getUserOffers` exists and returns an array of offers for the given address
      const userOffers = await getUserOffers(address);

      setOffers(userOffers);
    }

    fetchOffers();
  }, [address]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Offers</h1>
      {offers.length === 0 ? (
        <p className={styles.noOffers}>You have not created any offers yet.</p>
      ) : (
        <ul className={styles.offerList}>
          {offers.map((offer, index) => (
            <li key={index} className={styles.offerItem}>
              <div>Quantity: {offer.quantity}</div>
              <div>Price per Unit: {offer.pricePerUnit}</div>
              <div>Minimum Quantity: {offer.minQuantity}</div>
              <div>Duration: {offer.duration} hours</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Dummy function to simulate fetching user offers
async function getUserOffers(address) {
  // This function should interact with your smart contract to fetch the offers
  // Return dummy data for the example
  return [
    { quantity: 100, pricePerUnit: 50, minQuantity: 10, duration: 24 },
    { quantity: 200, pricePerUnit: 45, minQuantity: 20, duration: 12 },
  ];
}
