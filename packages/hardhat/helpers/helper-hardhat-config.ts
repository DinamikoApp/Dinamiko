const networkConfig = {
  31337: {
    name: "hardhat",
    subscriptionId: "588",
    callbackGasLimit: 500000,
    keepersUpdateInterval: "30",
    dataFeeds: {},
  },
  5: {
    name: "goerli",
    subscriptionId: "1884",
    keepersUpdateInterval: "30",
    callbackGasLimit: "500000",
    dataFeeds: {
      ethUsd: {
        name: "ethUsd",
        address: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        priceConsumerV3Address: "0xa2997F68ADa6E91a54040E98aecc2c612892EaCB",
      },

      btcUsdPriceFeed: {
        name: "btcUsd",
        address: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
        priceConsumerV3Address: "0x11bFA1d3020e58Ed0f7Ef93d012831FeFFdac790",
      },

      daiUsdPriceFeed: {
        name: "daiUsd",
        address: "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19",
        priceConsumerV3Address: "0x74a7f3ecb209d3353E61D24bC6Fa4Ab5B02C0375",
      },
    },
  },
  11155111: {
    name: "sepolia",
    subscriptionId: "1884",
    keepersUpdateInterval: "30",
    callbackGasLimit: "500000",
    dataFeeds: {
      ethUsd: {
        name: "ethUsd",
        address: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        priceConsumerV3Address: "0xa2997F68ADa6E91a54040E98aecc2c612892EaCB",
      },

      btcUsdPriceFeed: {
        name: "btcUsd",
        address: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
        priceConsumerV3Address: "0x11bFA1d3020e58Ed0f7Ef93d012831FeFFdac790",
      },

      daiUsdPriceFeed: {
        name: "daiUsd",
        address: "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19",
        priceConsumerV3Address: "0x74a7f3ecb209d3353E61D24bC6Fa4Ab5B02C0375",
      },
    },
  },
};

const developmentChain = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChain,
};
