const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        "-TestnetDataAggregator-LOCALHOST-30DayETHAPR": {
          address: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetDataAggregator-LOCALHOST-90DayETHAPR": {
          address: "0x59b670e9fA9D0A427751Af201D676719a970857b",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetDataAggregator-LOCALHOST-BTCIRBC1-Day": {
          address: "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetDataAggregator-LOCALHOST-BTCIRBC1-Week": {
          address: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTAAVE": {
          address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTCRV": {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTDAI": {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTLINK": {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [
                {
                  name: "",
                  type: "string",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_spender",
                  type: "address",
                },
                {
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  name: "",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  name: "",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_from",
                  type: "address",
                },
                {
                  name: "_to",
                  type: "address",
                },
                {
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  name: "",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  name: "",
                  type: "uint8",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_to",
                  type: "address",
                },
                {
                  name: "_value",
                  type: "uint256",
                },
                {
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "transferAndCall",
              outputs: [
                {
                  name: "success",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_spender",
                  type: "address",
                },
                {
                  name: "_subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseApproval",
              outputs: [
                {
                  name: "success",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  name: "balance",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  name: "",
                  type: "string",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_to",
                  type: "address",
                },
                {
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  name: "success",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                {
                  name: "_spender",
                  type: "address",
                },
                {
                  name: "_addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseApproval",
              outputs: [
                {
                  name: "success",
                  type: "bool",
                },
              ],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                {
                  name: "_owner",
                  type: "address",
                },
                {
                  name: "_spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  name: "remaining",
                  type: "uint256",
                },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "value",
                  type: "uint256",
                },
                {
                  indexed: false,
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTSUSHI": {
          address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTUSDC": {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTUSDT": {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTWBTC": {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetMintableERC20-LOCALHOSTWETH": {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "faucet",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTAAVEUSD": {
          address: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTCRVUSD": {
          address: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTDAIUSD": {
          address: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTETHUSD": {
          address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTLINKUSD": {
          address: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTSUSHIUSD": {
          address: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTUSDCUSD": {
          address: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTUSDTUSD": {
          address: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTUSDUSD": {
          address: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTWBTCUSD": {
          address: "0x9A676e781A523b5d0C0e43731313A708CB607508",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "-TestnetPriceAggregator-LOCALHOSTWETHUSD": {
          address: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-299a9124-27da-4be7-b06d-37e144b2a995": {
          address: "0x51A1ceB83B83F1985a81C295d1fF28Afef186E02",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-2babe760-29c0-473b-870e-4e498f81bdd1": {
          address: "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-2db675df-d73f-4878-9c03-7278c88528e3": {
          address: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-321c2f64-7d4c-478f-9f9b-9141010e193c": {
          address: "0x4826533B4897376654Bb4d4AD88B7faFD0C98528",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-3a06e69f-ccc1-4f31-b984-0ef2269d1311": {
          address: "0xD8a5a9b31c3C0232E196d518E89Fd8bF83AcAd43",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-3c9316c7-acde-4666-b3b2-64d6d866d251": {
          address: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-3e44d963-4c97-422a-9ae4-7a3b0f757079": {
          address: "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-3fc265ba-8933-4696-b6b3-d9a74f3cb4fd": {
          address: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-468158dd-accb-4c3a-8dc9-cffc0e11b22d": {
          address: "0x367761085BF3C12e5DA2Df99AC6E1a824612b8fb",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-5222b27e-a7a9-43f5-8073-843067c63034": {
          address: "0x36C02dA8a0983159322a80FFE9F24b1acfF8B570",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-52c3ef73-734c-44a0-8971-7ad6b82c40a6": {
          address: "0xCD8a1C3ba11CF5ECfa6267617243239504a98d90",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-53c8c483-e750-4bcd-a58f-bf28f1215e8b": {
          address: "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-54da3d01-5deb-46b9-a6d5-f0abef997df1": {
          address: "0x0355B7B8cb128fA5692729Ab3AAa199C1753f726",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-54e36f86-275c-40c3-a9a2-049f150c3c0e": {
          address: "0x4c5859f0F772848b2D91F1D83E2Fe57935348029",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-64a5311c-7104-467d-8a25-41456bdd2dbd": {
          address: "0xA4899D35897033b927acFCf422bc745916139776",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-756e9691-6839-4601-81de-a409ade94fa5": {
          address: "0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-75dc1b2b-4776-4c49-b9fd-20df75ee4991": {
          address: "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-7a8f959a-3b8e-490a-9e53-1fa607cf17d8": {
          address: "0x21dF544947ba3E8b3c32561399E88B52Dc8b2823",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-7da3fbf9-378a-4237-8bd1-4d4bfe28e9c9": {
          address: "0x9d4454B023096f34B160D6B654540c56A1F81688",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-83a502cf-94f8-4d84-b3b5-16b07e444828": {
          address: "0x172076E0166D1F9Cc711C77Adf8488051744980C",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-864e3f4b-f839-415d-9813-d04e04cdc43a": {
          address: "0x922D6956C99E12DFeB3224DEA977D0939758A1Fe",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-8c6f0a31-d91b-46ab-b637-46306dd0b4aa": {
          address: "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-95396891-e900-44bd-8dd0-e9295d94507e": {
          address: "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-a3445303-43f7-4a00-8ce7-e8b00d8f0c5e": {
          address: "0xc351628EB244ec633d5f21fBD6621e1a683B1181",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-a3b251d6-ea4f-436f-a20e-36c3527804f3": {
          address: "0x4A679253410272dd5232B3Ff7cF5dbB88f295319",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-a857b8e8-91ef-42c7-a5cd-b592bc95f93e": {
          address: "0xD84379CEae14AA33C123Af12424A37803F885889",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-ac03a2b3-df4e-4e37-bb4e-0642a416f4d7": {
          address: "0x46b142DD1E924FAb83eCc3c08e4D46E82f005e0E",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-cc46ea63-ffe5-436a-8564-d47ce675b943": {
          address: "0xf5059a5D33d5853360D16C683c16e67980206f36",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-d434733d-84bc-48a3-9e4e-c5f6df10dc5f": {
          address: "0x04C89607413713Ec9775E14b954286519d836FEf",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-f0a9be2b-3d8d-4ebb-b06f-cf491619b4f8": {
          address: "0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-f6707fc7-a675-4220-a6e2-0b19d583b961": {
          address: "0x998abeb3E57409262aE5b751f60747921B33613E",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-ff3033bb-f2f4-4fb5-bcd8-fa5bb73eaa99": {
          address: "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-0408cb82-b368-4c5f-8ca1-d8490c566722": {
          address: "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-0ac9696e-3fdf-4ee9-a056-8ecea81c430a": {
          address: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-13a27814-1b47-4e38-8664-4567f0274dfa": {
          address: "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-19896276-5a2a-46f5-a7fc-77b1534686ff": {
          address: "0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-1bf1b8ac-4ce6-4d57-bf45-c382c1a3a801": {
          address: "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-21f7617b-1b35-4e1b-8cfc-1cecb9d2455c": {
          address: "0xFD471836031dc5108809D173A067e8486B9047A3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-236b1ced-a796-4b02-80de-258906f86abe": {
          address: "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-25e6941b-9048-4fcf-98a2-d9494ad96d16": {
          address: "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-27e1aeba-0c0d-46d0-a251-30f14f2d418e": {
          address: "0xc5a5C42992dECbae36851359345FE25997F5C42d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-4a0f84b4-4c84-4c35-9c19-8f0b68407697": {
          address: "0xE6E340D132b5f46d1e472DebcD681B2aBc16e57E",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-51809477-1707-455b-b3a4-becc72883da6": {
          address: "0x1c85638e118b37167e9298c2268758e058DdfDA0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-54b888d5-c87c-468e-b891-d42cfeff2cc6": {
          address: "0x851356ae760d987E095750cCeb3bC6014560891C",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-62a08b7e-0460-4634-bc5d-a1a9f999ad48": {
          address: "0x70e0bA845a1A0F2DA3359C97E0285013525FFC49",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-6e4fd08b-0424-4a4f-9100-75dcf6cf5841": {
          address: "0x86A2EE8FAf9A840F7a2c64CA3d51209F9A02081D",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-6f6f427f-114c-4da6-b856-af038ad45b60": {
          address: "0x1291Be112d480055DaFd8a610b7d1e203891C274",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-70bd331d-fd54-41bc-bd02-46f2a66260fd": {
          address: "0x162A433068F51e18b7d13932F27e66a3f99E6890",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-765506a0-65b3-49ce-905d-f43db582613b": {
          address: "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-79edd21c-9486-4634-915c-e099f4f8d2d7": {
          address: "0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-84556ece-b7e9-4f7e-99ec-a02d06d82438": {
          address: "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-979e437d-4169-4bc0-8ffa-65ff056e14d9": {
          address: "0x7A9Ec1d04904907De0ED7b6839CcdD59c3716AC9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-9920366a-646d-472c-99d8-3d010ee91c6f": {
          address: "0x5eb3Bc0a489C5A8288765d2336659EbCA68FCd00",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-a3645c75-024f-44a8-b546-2c1844dd4443": {
          address: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-a71b7152-66b2-4188-a13b-86d9e99cda9f": {
          address: "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-c918a570-cede-4891-b940-6fc1b1897bc1": {
          address: "0xfbC22278A96299D91d41C453234d97b4F5Eb9B2d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-cacf2f52-ebc4-47eb-b945-9a33733eb915": {
          address: "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-cadace77-9990-489e-9d6d-322531ee4ac7": {
          address: "0xDC11f7E700A4c898AE5CAddB1082cFfa76512aDD",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-d448c221-0613-4197-88b6-f1e396309d8d": {
          address: "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-dc3543f5-9e20-47a9-a779-6dcb1bdf2b73": {
          address: "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-dd27dad7-d8b1-42f6-9eb0-27654ce65226": {
          address: "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-e86d6449-060a-4a25-b675-2c7df3d1eec1": {
          address: "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-e9580483-0a9d-4896-af21-98b9041ff79a": {
          address: "0xBEc49fA140aCaA83533fB00A2BB19bDdd0290f25",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-f551ec27-7902-40fe-a8b1-86cba51edf1f": {
          address: "0x95401dc811bb5740090279Ba06cfA8fcF6113778",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "PriceBasedSubscriptions-8a8a8fb4-34ab-48e3-aaa8-cda85eb72045": {
          address: "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IDinamikoPriceOracle",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract LinkTokenInterface",
                  name: "link",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionsAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_usdtAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "OwnershipTransferRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "checkData",
                  type: "bytes",
                },
              ],
              name: "checkUpkeep",
              outputs: [
                {
                  internalType: "bool",
                  name: "upkeepNeeded",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "performData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "priceTarget",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenOut",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "createBuySubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "priceTarget",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenIn",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "createSellSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "i",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "executeSubscriptions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              name: "getTransactions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "transactionType",
                      type: "uint32",
                    },
                    {
                      internalType: "address",
                      name: "tokenIn",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "tokenOut",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amountIn",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountOut",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "priceTarget",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "active",
                      type: "bool",
                    },
                  ],
                  internalType: "struct PriceBasedSubscriptions.Subscription[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_link",
              outputs: [
                {
                  internalType: "contract LinkTokenInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_registrar",
              outputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "interval",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "lastTimeStamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "performUpkeep",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "bytes",
                      name: "encryptedEmail",
                      type: "bytes",
                    },
                    {
                      internalType: "address",
                      name: "upkeepContract",
                      type: "address",
                    },
                    {
                      internalType: "uint32",
                      name: "gasLimit",
                      type: "uint32",
                    },
                    {
                      internalType: "address",
                      name: "adminAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "checkData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "offchainConfig",
                      type: "bytes",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct RegistrationParams",
                  name: "params",
                  type: "tuple",
                },
              ],
              name: "registerAndPredictID",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "usdtAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "userSubscriptions",
              outputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint32",
                  name: "transactionType",
                  type: "uint32",
                },
                {
                  internalType: "address",
                  name: "tokenIn",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenOut",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amountIn",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "priceTarget",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-01edeeb9-7c13-413a-a844-8ac11a918b7c": {
          address: "0xC9a43158891282A2B1475592D5719c001986Aaec",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-0582ebe5-3959-41a2-bf0b-c9ed5c32d232": {
          address: "0x4631BCAbD6dF18D94796344963cB60d44a4136b6",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-2a75fd66-21fd-44d7-9ca7-e237ee5adf7a": {
          address: "0x4C2F7092C2aE51D986bEFEe378e50BD4dB99C901",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-5292c905-6711-4d70-8f90-45557d6926b3": {
          address: "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-c0595932-11b6-4a80-8638-7ff7306b29b2": {
          address: "0x36b58F5C1969B7b6591D752ea6F5486D069010AB",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-d2ecf471-1ed6-4f84-afdf-99fb3d37fe0d": {
          address: "0x4EE6eCAD1c2Dae9f525404De8555724e3c35d07B",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-e9f37118-8a67-4349-8c66-c54d781d95de": {
          address: "0xf953b3A269d80e3eB0F2947630Da976B896A8C5b",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-fc997f62-6d01-4032-b22e-b9c831c2be26": {
          address: "0x2B0d36FACD61B71CC05ab8F3D2355ec3631C0dd5",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoPriceOracle-bb3fe361-a5e1-41db-93e8-cee6020cd9a3": {
          address: "0xAA292E8611aDF267e563f334Ee42320aC96D0463",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "AssetSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "baseCurrency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "baseCurrencyUnit",
                  type: "uint256",
                },
              ],
              name: "BaseCurrencySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "BASE_CURRENCY_UNIT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getAssetPrice",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
              ],
              name: "getAssetsPrices",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "asset",
                  type: "address",
                },
              ],
              name: "getSourceOfAsset",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "assets",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setAssetSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoFeedOracle-e30cb3a2-acc6-461d-8396-54762f1a89e9": {
          address: "0x5c74c94173F05dA1720953407cbb920F3DF9f887",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
              ],
              name: "DataFeedSourceUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "FallbackOracleUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "getFallbackOracle",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getFeedData",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
              ],
              name: "getFeedsData",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "getSourceOfData",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "address[]",
                  name: "sources",
                  type: "address[]",
                },
              ],
              name: "setDataFeedSources",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "fallbackOracle",
                  type: "address",
                },
              ],
              name: "setFallbackOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "SubscriptionAction-91e91fb2-e141-416e-90d6-2ea8663fa9ac": {
          address: "0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_routerAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_factoryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountOut",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              name: "Transaction",
              type: "event",
            },
            {
              inputs: [],
              name: "POOL_FEE",
              outputs: [
                {
                  internalType: "uint24",
                  name: "",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_purchaseToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "buyAsset",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "factoryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_sellToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_receiver",
                  type: "address",
                },
              ],
              name: "sellToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
