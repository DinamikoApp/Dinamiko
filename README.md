# 🤓 Dinamiko - Chainlink Spring 2023 Hackathon

💡 Discover a cutting-edge open-source solution for web3 decentralized applications (dapps) operating on the blockchain. This remarkable platform streamlines investment trading decisions by leveraging a combination of on-chain and off-chain events or data statuses through the remarkable capabilities of Chainlink.

- ✅ **Actions**: Seamlessly execute asset buy/sell transactions and contribute liquidity.
- 🔥 **Subscitpion types**: Choose from time-based, price-based, or trading volume-based options.
- 🔐 **Tokens**: Engage with popular cryptocurrencies such as ETH, LINK, BNB, and MATIC.

Under the hood, this innovative platform is powered by the advanced Scaffold-ETH toolkit, integrating the robust Chainlink Data Feed and API alongside the transformative capabilities of web3 technology.🏋️‍♀️

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)]
- Yarn ([v1] or [v2+]
- [Git]

## Quickstart

1. Clone this repo & install dependencies

```
git clone https://github.com/Ifechukwudaniel/Dinamiko.git
cd Ifechukwudaniel
yarn install
```

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

3. Deploy the smart contracts on the network (here used mumbai):

```
yarn deploy --network mumbai
```

Note: make sure to have some funds in your deployer account to pay for the transaction.

4. Verify your smart contract

```
yarn verify --network network_name
```

5. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.
