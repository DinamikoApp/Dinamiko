const contracts = {
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        "-TestnetMintableERC20-SEPOLIAAAVE": {
          address: "0xfdD4D176fF8f16dB8FbC903b1aBBdF229A558A59",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIACRV": {
          address: "0xaFbdf1DE9681312d14eb74AF3b831dc42e809c78",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIADAI": {
          address: "0xf7EB35bFD7B2ACE0c7BCAD037b2eeb01037D2bbd",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIALINK": {
          address: "0x89769e8c32A0e538641a3A9a30De6C065bB21862",
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
        "-TestnetMintableERC20-SEPOLIASUSHI": {
          address: "0xA79328Ab01CC283Bcf2Dc07A77764BCdE4F5f81A",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIAUSDC": {
          address: "0x79ed145d313e6767b1B3412d72B20978c078633e",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIAUSDT": {
          address: "0x06042f063c27c49DFd18f59D568f5E8d0aeB1b10",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIAWBTC": {
          address: "0x092E15B1c12769eFF6f3E6b633aA5009593E973b",
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
              name: "mint",
              outputs: [],
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
        "-TestnetMintableERC20-SEPOLIAWETH": {
          address: "0x33999122Ac993022531cd5a22db1bf5003CdCEED",
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
              name: "mint",
              outputs: [],
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
        "-TestnetPriceAggregator-SEPOLIADAIUSD": {
          address: "0x7b83fdfc6A803062646e5c9C173902F0872b6520",
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
        "-TestnetPriceAggregator-SEPOLIAETHUSD": {
          address: "0xC64407834611E0C29Fc38ac9dca36Cb8Ef70e31B",
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
        "-TestnetPriceAggregator-SEPOLIAWETHUSD": {
          address: "0xCc5503D21bD8fF434B7cc6CA67BA2a43538E6625",
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
        "DataFeedBased-3cc6d3ce-7197-4844-a5b8-f9a890cf7aaa": {
          address: "0x5fb262a8AdBA6d945D70442Ccb4f4AB1b071DAF5",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastDataFeedValue",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feedChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IDataFeedBased.DataFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastDataFeedValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DataFeedBased-b4514db2-21f6-400f-af71-506c27c08ad7": {
          address: "0x48402CbC08ab32B2d380973c78461071C00490D0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastDataFeedValue",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feedChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IDataFeedBased.DataFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastDataFeedValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DataFeedBased-c3b4e538-85f2-4f54-abaa-6132c4a270a6": {
          address: "0x3F163eF9C992976047a240fE8E35d9e86c4eB443",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastDataFeedValue",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feedChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IDataFeedBased.DataFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastDataFeedValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DataFeedBased: {
          address: "0xa5a87fe5e6b30a3e75937cE4c8b423b759c95b21",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "feedId",
                  type: "bytes32",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastDataFeedValue",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feedChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IDataFeedBased.DataFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastDataFeedValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feedChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DataFeedBasedFactory-56d56ea3-0862-4b56-9090-6c433330122f": {
          address: "0x7a2F9c2C17E6D3A5dD6b45BdBE39E7a39EA89bbe",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_feedOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createDataFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "feedOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        "DataFeedBasedFactory-609daa1e-4367-48bc-960f-cd8edccec3ee": {
          address: "0xb5A8B19fFEd5790537f8EE5f061CEf0437BeAB49",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_feedOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createDataFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "feedOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        DataFeedBasedFactory: {
          address: "0x1ea98DC1Ba7F447154b71b90e7da616C25Fa1dA9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_feedOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createDataFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "feedOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        "DinamikoFeedOracle-019cf671-a5af-4094-ba87-17e5927363ce": {
          address: "0xc5D24187f42d9D8642acfDdB7A2c9407564c50bA",
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
        "DinamikoFeedOracle-9561f6b5-2cc0-4c56-8f97-6e2cea41fa0a": {
          address: "0x30d21165A9393735C0D3eeB50334B3558faD294e",
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
        "DinamikoFeedOracle-e1c4c39e-a7e1-487b-82a5-f56a19b306b9": {
          address: "0x3C65Ba8E4d37B1736C1082dE7d9D097AEc7E1bc8",
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
        DinamikoFeedOracle: {
          address: "0x94794E30827055BEAb042109D3d15F8969244689",
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
        "DinamikoInflationOracle-2aec28f3-53be-4ec3-b99b-0bd5ab5cfe76": {
          address: "0x43532A78b25F12041DCe3FA362ac22C877e265ee",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "oracleId_",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "jobId_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "fee_",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
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
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "changeFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "changeJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_oracle",
                  type: "address",
                },
              ],
              name: "changeOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_inflation",
                  type: "bytes",
                },
              ],
              name: "fulfillYoyInflation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getChainlinkToken",
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
              name: "getInflationRate",
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
              name: "jobId",
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
              name: "oracleId",
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
              name: "requestYoyInflation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "yoyInflation",
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
        "DinamikoInflationOracle-6b188726-6922-4a32-9cbf-8a4a28933c1e": {
          address: "0x7e16DCA1e72cb0B94F76E2FE9814A9d1016841Ee",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "oracleId_",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "jobId_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "fee_",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
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
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "changeFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "changeJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_oracle",
                  type: "address",
                },
              ],
              name: "changeOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_inflation",
                  type: "bytes",
                },
              ],
              name: "fulfillYoyInflation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getChainlinkToken",
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
              name: "getInflationRate",
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
              name: "jobId",
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
              name: "oracleId",
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
              name: "requestYoyInflation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "yoyInflation",
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
        "DinamikoInflationOracle-e67fea28-36d9-4d05-9f24-d2fb053a1f48": {
          address: "0x81c673c83ACe75b11876b00133EF3f023d1D6fB2",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "oracleId_",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "jobId_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "fee_",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
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
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "changeFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "changeJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_oracle",
                  type: "address",
                },
              ],
              name: "changeOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_inflation",
                  type: "bytes",
                },
              ],
              name: "fulfillYoyInflation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getChainlinkToken",
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
              name: "getInflationRate",
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
              name: "jobId",
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
              name: "oracleId",
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
              name: "requestYoyInflation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "yoyInflation",
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
        DinamikoInflationOracle: {
          address: "0xA922a0c7803718a6294A5Ea2c34387F45FeFE142",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "token_",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "oracleId_",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "jobId_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "fee_",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
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
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "changeFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "changeJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_oracle",
                  type: "address",
                },
              ],
              name: "changeOracle",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_inflation",
                  type: "bytes",
                },
              ],
              name: "fulfillYoyInflation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getChainlinkToken",
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
              name: "getInflationRate",
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
              name: "jobId",
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
              name: "oracleId",
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
              name: "requestYoyInflation",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "yoyInflation",
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
        "DinamikoInflationOracleUpdater-76404e7c-b852-497b-928e-22108744cf67": {
          address: "0x792Ec9D0d10db2979db162f707cE3C162277A75a",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
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
          ],
        },
        "DinamikoInflationOracleUpdater-c30d3b34-0f8c-4f65-86b0-a6772bda779b": {
          address: "0xd81fdE0800E3dE7A010D0aB7cf85EAA2ab6436A6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
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
          ],
        },
        "DinamikoInflationOracleUpdater-c52484a0-08d5-4c03-824b-5ab66731b273": {
          address: "0xd7DFe11EcC762F2d36307Fc62d0afA51BDeD02E0",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
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
          ],
        },
        DinamikoInflationOracleUpdater: {
          address: "0x6a3adCeCA24e84AbCc87d2FBd448b0765D7affab",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
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
          ],
        },
        "DinamikoPriceOracle-16f53490-4c7d-4301-b126-c4249db3b6c3": {
          address: "0x644BEf9FA2201bd57909108B6Cf09bC8cB50424a",
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
        "DinamikoPriceOracle-b075f551-ffbd-4727-afa6-ff569493e55f": {
          address: "0xf8f29a654ccEEc5c29a8d139b1Fb3d403082911D",
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
        "DinamikoPriceOracle-f6b49538-00b0-4b85-9e3e-a7bcdab7fef5": {
          address: "0x16Fcd624aF9DAa160A328dECe96c5aAF8DbBA228",
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
        DinamikoPriceOracle: {
          address: "0xB0f244697762BB6084B552E2E75C211144dB7d32",
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
        "DinamikoVolumeOracle-08f276ec-db86-442f-b41f-48c16b8c3941": {
          address: "0x89aA67dca94511652a064eA9539e95ED2E57E26A",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-0d3c63ae-40a2-4416-b24c-f2586240df64": {
          address: "0x03e69350Cf02F9D378d5cDAA46299ea0934755B9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-1eb55d11-dda9-4749-92c9-3570378e0c92": {
          address: "0xcFd3513987D77D1B1062572b3711936e93B64fc3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-20eeda10-5772-46cb-8be8-e9bfb1eaa8b6": {
          address: "0xE027e3E2451bbea6b7cFb6cD3f38cAdEbC1A45BA",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-21e889f2-08e4-4e17-92dc-cae8e31acfeb": {
          address: "0x4606Ce29bAefE579a0fA6C17ec753Fab33F4DD04",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-2bce838d-ea87-41a7-9291-3e3091933d83": {
          address: "0x83C8C8E29445c506078A183A376AF7104E39E1e7",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-3ee8059d-f8c5-40d3-ba2e-f182c4448a8b": {
          address: "0x071Aa2B9503F7F55aC2056B2325F828a6EFe9736",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-469ed964-6219-4ac7-a3db-1b6a4fab0a0b": {
          address: "0x7cB2d682F54056dFB3Eaa113FcAa92a1349F5a97",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-54611ba8-f7db-4c81-9408-f6a4830065e0": {
          address: "0x6530C935D189293108e16Bd7d7646FC6f2989435",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-5b3eeda7-a7ab-4bc9-8cf1-868f10d4be41": {
          address: "0xF1edf213f9D44b92CC2632A0902dB3F922214E35",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-5d6806e8-9a78-4dfb-a4e1-35fe0df772b6": {
          address: "0xd13E708d1B43FEc1c070bA739cb146639a080BC8",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-686ccfdf-1674-4481-b03f-156d3cfffc2b": {
          address: "0x06e7E9Cc1b6cD277181ce81aC109f96211A7b7Cd",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-6d6c84cf-83cc-4b1e-892b-313129eb3368": {
          address: "0x6C56A3087a67E046e814C72A962179F25639Cf94",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-7a9c1c5f-7e3e-461d-9987-a8139f67ad4d": {
          address: "0xb90B5bCAC8fF4500B56fA2A6351C45c14DAB9580",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-81ee1cb8-9b32-4151-8e9c-b63c2f0c387d": {
          address: "0x031Fd125Ca4e0E368ce4706707f1E53928bf1263",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-9c643c59-b76b-4f66-9503-089c2c12de9a": {
          address: "0xa0E65CCFfb9bAFD82cc055E14bC9d3Fc8405347c",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-9ccf36d4-2feb-44d1-b369-aacdabdf4b1b": {
          address: "0x473a98820d25B4cfd1cb0AdFDe155532E7F61781",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-9e1989bd-cb10-4d59-a2e3-5fbcd49d8173": {
          address: "0x73DfD04Cd111AF0BA2e7FFAcd8ab42f471a72c7e",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-9ea94f8f-6c06-4e8f-94a0-a7a52376c898": {
          address: "0x37daf4C9D77DCA976a2EFAB84561EEEC6742E047",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-ab2bfd69-b7c2-4558-ac20-37331ca52cf2": {
          address: "0x6333E04DCFFE2C05b94169F541B7A55C2502580d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-c4868fad-a0f9-4729-85a9-ed43e04abe38": {
          address: "0x6D658b37701A9f26338Aa41385d4baBE9365EEC9",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-db852332-a026-44e2-aca7-bd6ca9904cae": {
          address: "0x0516f1cd80bdc60E54156B42Fe22E0341dc17676",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-def8f923-d87f-44c6-ba35-bfe7eeca905c": {
          address: "0xB9794092Fd62F9DD88dFdA643aE35069d0710a81",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-ee900a47-93d9-4108-a04f-5917be0c42f4": {
          address: "0x272d6BE63d6C031387813b149d9029419927f5fE",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-f7177afd-e366-4a0f-a886-92738027b7d8": {
          address: "0x741658E02699C28996c75C53B542F93C99259FfE",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-f89effc0-2007-48b5-9f65-3e9cb7a691cd": {
          address: "0xf0352F73631D493Cd96216C45906fF7C445840ec",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracle-fd69b7d2-9e98-43fe-ae4e-2cafca609562": {
          address: "0x9F1724c09549Fc8C32F3F690E518e0cFf6Ec6F4b",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        DinamikoVolumeOracle: {
          address: "0xF63F81B432c46cB5069AdDC838FcD7FeF593B765",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_linkAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_linkOracleAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
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
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
              ],
              name: "ChainlinkCancelled",
              type: "event",
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
              ],
              name: "ChainlinkFulfilled",
              type: "event",
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
              ],
              name: "ChainlinkRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newFee",
                  type: "uint256",
                },
              ],
              name: "FeeUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "newJobId",
                  type: "string",
                },
              ],
              name: "JobIdUpdated",
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
                  internalType: "string",
                  name: "newSymbol",
                  type: "string",
                },
              ],
              name: "SymbolUpdated",
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
              inputs: [],
              name: "fee",
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
                  internalType: "bytes32",
                  name: "_requestId",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "_volume",
                  type: "uint256",
                },
              ],
              name: "fulfill",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getVolume",
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
              name: "jobId",
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
              name: "requestVolumeData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "requestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
              ],
              name: "setFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_jobId",
                  type: "string",
                },
              ],
              name: "setJobId",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
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
              name: "volume",
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
              name: "withdrawLink",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "DinamikoVolumeOracleUpdater-28edf061-ac13-4ebf-a3c3-5ec064660662": {
          address: "0x4D61D2E44ce59EfD323dD37ed54c48732a59b368",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_volumeOracles",
                  type: "address[]",
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
          ],
        },
        "DinamikoVolumeOracleUpdater-778321a3-9b88-4f9c-99fa-515a45df36ca": {
          address: "0x9aa0dC0aC5435F0e9c723D0d301F55D914E1E802",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_volumeOracles",
                  type: "address[]",
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
          ],
        },
        "DinamikoVolumeOracleUpdater-bdcabef6-e2ed-4e82-ae9e-5841cfe9adf2": {
          address: "0x24E7f2F643387DA4B80B43495787AD4Ee06ADfd4",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_volumeOracles",
                  type: "address[]",
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
          ],
        },
        DinamikoVolumeOracleUpdater: {
          address: "0x7eCd5d44BC241AEc595ECb80f418f3A54C37ACF0",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_volumeOracles",
                  type: "address[]",
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
          ],
        },
        "ERC20BalanceMonitor-14875cca-a7aa-427d-b627-90be1a4e1bc5": {
          address: "0x1711aC235682F74927554c7eBBA3ef678Af5fb17",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "minWaitPeriodSeconds",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "duplicate",
                  type: "address",
                },
              ],
              name: "DuplicateAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidWatchList",
              type: "error",
            },
            {
              inputs: [],
              name: "OnlyKeeperRegistry",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ERC20TokenAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "FundsWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "KeeperRegistryAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "oldMinWaitPeriod",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newMinWaitPeriod",
                  type: "uint256",
                },
              ],
              name: "MinWaitPeriodUpdated",
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
                  indexed: true,
                  internalType: "address",
                  name: "topUpAddress",
                  type: "address",
                },
              ],
              name: "TopUpSucceeded",
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
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "oldWatchlist",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "newWatchlist",
                  type: "address[]",
                },
              ],
              name: "WatchlistUpdated",
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
                  name: "",
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
                  internalType: "address",
                  name: "targetAddress",
                  type: "address",
                },
              ],
              name: "getAccountInfo",
              outputs: [
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "uint96",
                  name: "minBalance",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "topUpLevel",
                  type: "uint96",
                },
                {
                  internalType: "uint56",
                  name: "lastTopUpTimestamp",
                  type: "uint56",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getERC20TokenAddress",
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
              name: "getKeeperRegistryAddress",
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
              name: "getMinWaitPeriodSeconds",
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
              name: "getUnderfundedAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getWatchList",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
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
                  name: "performData",
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
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
              ],
              name: "setERC20TokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
              ],
              name: "setKeeperRegistryAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "period",
                  type: "uint256",
                },
              ],
              name: "setMinWaitPeriodSeconds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
                {
                  internalType: "uint96[]",
                  name: "minBalances",
                  type: "uint96[]",
                },
                {
                  internalType: "uint96[]",
                  name: "topUpLevels",
                  type: "uint96[]",
                },
              ],
              name: "setWatchList",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "needsFunding",
                  type: "address[]",
                },
              ],
              name: "topUp",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
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
                {
                  internalType: "address payable",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "ERC20BalanceMonitor-4be1a2c8-c3d9-436d-9933-6dce2666275d": {
          address: "0x6CBA898bDD37c8183e8269ED3733DC6b961E5FF8",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "minWaitPeriodSeconds",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "duplicate",
                  type: "address",
                },
              ],
              name: "DuplicateAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidWatchList",
              type: "error",
            },
            {
              inputs: [],
              name: "OnlyKeeperRegistry",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ERC20TokenAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "FundsWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "KeeperRegistryAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "oldMinWaitPeriod",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newMinWaitPeriod",
                  type: "uint256",
                },
              ],
              name: "MinWaitPeriodUpdated",
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
                  indexed: true,
                  internalType: "address",
                  name: "topUpAddress",
                  type: "address",
                },
              ],
              name: "TopUpSucceeded",
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
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "oldWatchlist",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "newWatchlist",
                  type: "address[]",
                },
              ],
              name: "WatchlistUpdated",
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
                  name: "",
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
                  internalType: "address",
                  name: "targetAddress",
                  type: "address",
                },
              ],
              name: "getAccountInfo",
              outputs: [
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "uint96",
                  name: "minBalance",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "topUpLevel",
                  type: "uint96",
                },
                {
                  internalType: "uint56",
                  name: "lastTopUpTimestamp",
                  type: "uint56",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getERC20TokenAddress",
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
              name: "getKeeperRegistryAddress",
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
              name: "getMinWaitPeriodSeconds",
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
              name: "getUnderfundedAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getWatchList",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
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
                  name: "performData",
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
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
              ],
              name: "setERC20TokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
              ],
              name: "setKeeperRegistryAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "period",
                  type: "uint256",
                },
              ],
              name: "setMinWaitPeriodSeconds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
                {
                  internalType: "uint96[]",
                  name: "minBalances",
                  type: "uint96[]",
                },
                {
                  internalType: "uint96[]",
                  name: "topUpLevels",
                  type: "uint96[]",
                },
              ],
              name: "setWatchList",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "needsFunding",
                  type: "address[]",
                },
              ],
              name: "topUp",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
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
                {
                  internalType: "address payable",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        ERC20BalanceMonitor: {
          address: "0xaa92EdC55C24015A6D60Bf74867Fc00B9C7e8d9f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "minWaitPeriodSeconds",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "duplicate",
                  type: "address",
                },
              ],
              name: "DuplicateAddress",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidWatchList",
              type: "error",
            },
            {
              inputs: [],
              name: "OnlyKeeperRegistry",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ERC20TokenAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amountWithdrawn",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "FundsWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "oldAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "KeeperRegistryAddressUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "oldMinWaitPeriod",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newMinWaitPeriod",
                  type: "uint256",
                },
              ],
              name: "MinWaitPeriodUpdated",
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
                  indexed: true,
                  internalType: "address",
                  name: "topUpAddress",
                  type: "address",
                },
              ],
              name: "TopUpSucceeded",
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
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "oldWatchlist",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "newWatchlist",
                  type: "address[]",
                },
              ],
              name: "WatchlistUpdated",
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
                  name: "",
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
                  internalType: "address",
                  name: "targetAddress",
                  type: "address",
                },
              ],
              name: "getAccountInfo",
              outputs: [
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "uint96",
                  name: "minBalance",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "topUpLevel",
                  type: "uint96",
                },
                {
                  internalType: "uint56",
                  name: "lastTopUpTimestamp",
                  type: "uint56",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getERC20TokenAddress",
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
              name: "getKeeperRegistryAddress",
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
              name: "getMinWaitPeriodSeconds",
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
              name: "getUnderfundedAddresses",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getWatchList",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
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
                  name: "performData",
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
                  internalType: "address",
                  name: "erc20TokenAddress",
                  type: "address",
                },
              ],
              name: "setERC20TokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "keeperRegistryAddress",
                  type: "address",
                },
              ],
              name: "setKeeperRegistryAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "period",
                  type: "uint256",
                },
              ],
              name: "setMinWaitPeriodSeconds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "addresses",
                  type: "address[]",
                },
                {
                  internalType: "uint96[]",
                  name: "minBalances",
                  type: "uint96[]",
                },
                {
                  internalType: "uint96[]",
                  name: "topUpLevels",
                  type: "uint96[]",
                },
              ],
              name: "setWatchList",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "needsFunding",
                  type: "address[]",
                },
              ],
              name: "topUp",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
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
                {
                  internalType: "address payable",
                  name: "payee",
                  type: "address",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "InflationBased-3875867b-6646-41c4-92cb-cac34bedd835": {
          address: "0xF476e8E43b20e1dF4e673695D851DDd360F55517",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              name: "LastInflationsRate",
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
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastInflationRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "inflationChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IInflationBased.InflationBaseSubscription[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_inflationOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoInflationOracle",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastInflationRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "InflationBased-5de615a4-e9ce-4e65-8d81-822a4dc28439": {
          address: "0x9d6Db1e4005E9CFE07753B63Ca4fa6B2FABdF8ed",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              name: "LastInflationsRate",
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
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastInflationRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "inflationChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IInflationBased.InflationBaseSubscription[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_inflationOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoInflationOracle",
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
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastInflationRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "InflationBased-f3a54dc8-9545-4c75-ae7c-23f7eb135d18": {
          address: "0x36a9B7c625E89901c0Be4Dbb42E6458643241cde",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              name: "LastInflationsRate",
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
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastInflationRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "inflationChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IInflationBased.InflationBaseSubscription[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_inflationOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoInflationOracle",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastInflationRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        InflationBased: {
          address: "0x50caF34dC01C3538Af66CC9f1D413779C4AD1C3d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              name: "LastInflationsRate",
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
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastInflationRate",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "inflationChangePercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IInflationBased.InflationBaseSubscription[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "i_inflationOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoInflationOracle",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastInflationRate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "inflationChangePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "InflationBasedFactory-cf634ddb-7b32-42b3-83eb-e4a3d44413d5": {
          address: "0x44Ca67d22f468c3cDeEBbf126FC104fF15337e21",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createInflationBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "inflationOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        "InflationBasedFactory-ff10b05f-28bc-46e3-a500-53b619aebeb4": {
          address: "0x6f3F9A90352bD7f18371782C979B748588818735",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createInflationBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "inflationOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        InflationBasedFactory: {
          address: "0x2b1E17a8C59936842eb7193D564fDd40cCB8D193",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_inflationOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createInflationBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              name: "inflationOracle",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        "PriceFeedBased-484d2306-48db-4af4-a75d-8e619eb36683": {
          address: "0x4b9dfc9c349daA8375c7750419dC178745748765",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "assetPriceChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IPriceFeedBased.PriceFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "priceOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoPriceOracle",
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
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "PriceFeedBased-94e0af93-49cb-4eb0-bc3c-88409a3678c6": {
          address: "0xBfF0288066D3Dea8Fa889597F880038020904aCe",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "assetPriceChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IPriceFeedBased.PriceFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "priceOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoPriceOracle",
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
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "PriceFeedBased-b03af18f-1889-4b29-abf2-d9b8e5770110": {
          address: "0x1e229edf552970a2F54C328805C495449F1b502E",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "assetPriceChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IPriceFeedBased.PriceFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "priceOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoPriceOracle",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        PriceFeedBased: {
          address: "0x0738f7A0D5FF2A7967240C84EF7Ed34E4e555726",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token",
                  type: "address",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseCurrency",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "assetPriceChangePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPercent",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct IPriceFeedBased.PriceFeedBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "priceOracle",
              outputs: [
                {
                  internalType: "contract IDinamikoPriceOracle",
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
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "PriceFeedBasedFactory-138fbde4-64e7-4edc-96e7-6b45f6eb44f1": {
          address: "0xB0bE8aA940B5d81c3da43BD5C108ccfB66417da1",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
              name: "createPriceFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        "PriceFeedBasedFactory-b8e811fe-9c92-4f36-bb5c-bfd9cb83307e": {
          address: "0x3f7A79014abfFf85d927857F0F5d40B553Df1010",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
              name: "createPriceFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        PriceFeedBasedFactory: {
          address: "0xCdA23c56f9e1f3183b3Be5F5efCe217aF0c0F1b8",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseCurrency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "baseCurrency",
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
              name: "createPriceFeedBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        "SubscriptionAction-9a12d57b-2526-4408-bca7-be1866fed0fa": {
          address: "0x619e87f0683B1412F449F68DDFC4b63Eb6DB319C",
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
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidity",
              outputs: [],
              stateMutability: "nonpayable",
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
        "SubscriptionAction-a701dc4b-0a9a-4264-be1c-266ff509ed6f": {
          address: "0x7CE8f1B18BBadc29bcEf05BE99CabEf743502b4A",
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
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidity",
              outputs: [],
              stateMutability: "nonpayable",
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
        "SubscriptionAction-ed6e8d77-d57c-4df5-b5b3-b6267387ff92": {
          address: "0x6aD3D40b8CcBa0E0657FDEC1f620f80471973A83",
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
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidity",
              outputs: [],
              stateMutability: "nonpayable",
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
        SubscriptionAction: {
          address: "0xa754ecb7802E83E01B7D08402cA6207bacBea10B",
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
                  name: "tokenA",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tokenB",
                  type: "address",
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                },
                {
                  internalType: "uint256",
                  name: "amountA",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountB",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              name: "addLiquidity",
              outputs: [],
              stateMutability: "nonpayable",
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
        "TimeBase-0308f116-d4d5-48e4-8336-aa0f82ff9f99": {
          address: "0x633e02d340040Dff4F4b34c1f661A2EBcD993e42",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subscriptionInterval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "interval",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPricePercent",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ITimeBased.TimeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TimeBase-1f9e5e16-fd54-4eb7-a174-caa72910594f": {
          address: "0x74f52Aa1569Df54fb8776B481178e1174984A4A5",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subscriptionInterval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "interval",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPricePercent",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ITimeBased.TimeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TimeBase-7abd3e4f-5b38-4292-8cba-1c01fa4cb9c8": {
          address: "0x8327aC084C050f0054692db5768322856b27cef7",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subscriptionInterval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "interval",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPricePercent",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ITimeBased.TimeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TimeBase: {
          address: "0xaeed17C35a1761A87aAC8181B7842396FF424843",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subscriptionInterval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "interval",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPricePercent",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ITimeBased.TimeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TimeBasedFactory-b0d628cd-3ff4-41b5-95e8-a1677eadbe6a": {
          address: "0xED83314DaaBdDb4307F4012Fb5fBA68720ff0772",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTimeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        "TimeBasedFactory-d369aa90-f8bd-4e44-a384-6ef2af53cef5": {
          address: "0xAA0a21b222E24e6167AD6D4d02394A67407d4041",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTimeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        TimeBasedFactory: {
          address: "0xFed2bD876CAE514125a9C1877FcBB9539423Aa84",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_priceOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTimeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
              name: "priceOracle",
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
          ],
        },
        "TradingVolumeBased-3887e376-6df2-4720-817b-31a530694998": {
          address: "0x2E438645727101a93165093B44Fceb5545e44aa8",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "volumeParentageChange",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "volumeOracle",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastKnowVolume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "volumePercentChange",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct ITradingVolumeBased.TradingVolumeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastKnowVolume",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TradingVolumeBased-8ccc3d90-7d19-4d74-8901-518623ba0d9b": {
          address: "0xb36eE9Add218b902e76755d79EA6dCAcA74A8313",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "volumeParentageChange",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "volumeOracle",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastKnowVolume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "volumePercentChange",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct ITradingVolumeBased.TradingVolumeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastKnowVolume",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TradingVolumeBased-9d0783e7-3196-43b6-a18e-5597e440b345": {
          address: "0x8582f1daa9B695718dCaf74f14e4455e467602Af",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "volumeParentageChange",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "volumeOracle",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastKnowVolume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "volumePercentChange",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct ITradingVolumeBased.TradingVolumeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastKnowVolume",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TradingVolumeBased: {
          address: "0x6a50B90DBCeE276A568D8b8951d26F06D3428B2b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "volumeParentageChange",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "volumeOracle",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "lastKnowVolume",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "volumePercentChange",
                      type: "uint256",
                    },
                  ],
                  internalType:
                    "struct ITradingVolumeBased.TradingVolumeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "volumeOracle",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastKnowVolume",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "volumePercentChange",
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
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        "TradingVolumeBasedFactory-1854e0d7-f4e4-40cb-a68d-b12ff99e13ca": {
          address: "0x857428baeeB165445AD69FE33BDa09Fd95c0b02a",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTradingVolumeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        "TradingVolumeBasedFactory-311ec468-7662-4287-b0cd-c79ea710d5dd": {
          address: "0xD3BE4db0efC54c9C8415c73A5454886459473dbc",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTradingVolumeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        TradingVolumeBasedFactory: {
          address: "0x772f4dcA5b1D23Fe3FAC30249D88B1701cD5120f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_interval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "createTradingVolumeBasedContract",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "currency",
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
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "owners",
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
          ],
        },
        TimeBasedSubscription: {
          address: "0x940d882ccCBD21993b0963cffFFbcbFdb1fC8C2f",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "oracleAddress",
                  type: "address",
                },
                {
                  internalType: "contract KeeperRegistrarInterface",
                  name: "_registrar",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "updateInterval",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_baseToken",
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
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              name: "CreateSubscription",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
              ],
              name: "DeleteSubscription",
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
              inputs: [],
              name: "baseToken",
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
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subscriptionInterval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
                  type: "uint256",
                },
              ],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionId",
                  type: "uint256",
                },
              ],
              name: "deleteSubscription",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subId",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getSubscriptions",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "subscriptionType",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "action",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "token1",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "token2",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "liquidityPool",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "interval",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "lastAssetPrice",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "assetPricePercent",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct ITimeBased.TimeBasedSubscription[]",
                  name: "",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "subAction",
                  type: "address",
                },
              ],
              name: "setSubScriptionAction",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionAction",
              outputs: [
                {
                  internalType: "contract ISubscriptionAction",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "subscriptionIds",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "subscriptions",
              outputs: [
                {
                  internalType: "uint256",
                  name: "subscriptionType",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "action",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "token1",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "token2",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "liquidityPool",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastAssetPrice",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "assetPricePercent",
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
              ],
              name: "transferOwnership",
              outputs: [],
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
