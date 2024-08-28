'use client';

import { useEffect, useState } from 'react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import styles from '../styles/offers.module.css';

export default function OffersPage() {
  const [offers, setOffers] = useState([]);
  const { address } = useWeb3ModalAccount();

  useEffect(() => {
    async function fetchOffers() {
      // Replace with actual logic to fetch all available offers
      const allOffers = await getAllOffers();
      setOffers(allOffers);
    }

    fetchOffers();
  }, []);

  const handleBuy = (offerId) => {
    // Replace with logic to handle purchase of the offer
    console.log(`Buying offer with ID: ${offerId} by user ${address}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Available Offers</h1>
      {offers.length === 0 ? (
        <p className={styles.noOffers}>No offers are available at the moment.</p>
      ) : (
        <ul className={styles.offerList}>
          {offers.map((offer, index) => (
            <li key={index} className={styles.offerItem}>
              <div>Seller: {offer.seller}</div>
              <div>Quantity: {offer.quantity}</div>
              <div>Price per Unit: {offer.pricePerUnit}</div>
              <div>Minimum Quantity: {offer.minQuantity}</div>
              <div>Duration: {offer.duration} hours</div>
              <button className={styles.buyButton} onClick={() => handleBuy(offer.id)}>
                Buy
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Dummy function to simulate fetching all offers
async function getAllOffers() {
  // This function should interact with your smart contract to fetch all offers
  // Return dummy data for the example
  return [
    { id: 1, seller: '0xSellerAddress1', quantity: 100, pricePerUnit: 50, minQuantity: 10, duration: 24 },
    { id: 2, seller: '0xSellerAddress2', quantity: 200, pricePerUnit: 45, minQuantity: 20, duration: 12 },
  ];
}
