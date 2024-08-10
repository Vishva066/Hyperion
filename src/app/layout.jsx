// app/layout.js
import './globals.css';

import { Web3Modal } from '../context/web3modal';

export const metadata = {
  title: 'Hyperion',
  description: 'Welcome to Hyperion, A peer to peer energy trading platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3Modal> {children} </Web3Modal>
      </body>
    </html>
  );
}
