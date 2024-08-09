# Hyperion

## Problem Statement

In traditional energy distribution systems, power is generated at centralized locations such as large power plants, and then distributed to consumers over a vast network. This centralized approach creates a single point of failure, meaning that if the central power generation facility or any critical infrastructure connected to it experiences an outage, it can lead to widespread blackouts, affecting entire regions or even an entire country. 

## Solution

Peer-to-peer (P2P) energy trading presents a potential solution by enabling localized energy generation and distribution among consumers, reducing dependency on centralized power sources and enhancing the overall resilience of the energy grid.

## Example Scenario

Alice lives in a suburban neighborhood and has installed a solar panel system on her rooftop. Her solar panels are capable of generating 50 kW of electricity per day. However, Alice's household only requires about 10 kW of electricity per day. This means she has 40 kW of excess energy that is currently going to waste because she does not have a battery storage system, and the centralized grid does not compensate her adequately for the surplus.

Instead of letting this excess energy go to waste, Alice can participate in a Peer-to-Peer (P2P) energy trading system. Through this system, Alice can sell her surplus 40 kW of energy to nearby users in her community who need more electricity, such as Bob, who runs a small business from his home, and Carol, who has an electric vehicle that requires regular charging.

### Benefits of P2P Energy Trading

- Cost Efficiency - It is comparitively less that the traditonl source of energy.

- Clean energy usage.

- Management of Users.

## Technology stack

- Hyperledger Besu (Private Ethereum Network)

- Solidity

- Next js

- Tailwind CSS

## Network

Here we are creating a hyperledger besu based private network based on **proof of clique consensus**. Here we are also **stopping the creating of empty blocks and disabling the gas fee also**.

## Contract 

Here we are using the double auction contract to create a p2p based energy trading.

## UI

We are using next js for UI and Tailwind CSS for styling.

