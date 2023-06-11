import React, { useState } from "react";
import { MockToken, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { BanknotesIcon } from "@heroicons/react/20/solid";
import { Address, AddressInput } from "../scaffold-eth";
import { useAccount } from "wagmi";

export default function FaucetButton({ tokenAddress, tokenSymbol, contractName }: MockToken) {
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [inputAddress, setInputAddress] = useState("");
  const { writeAsync: sendToken } = useScaffoldContractWrite(contractName, "faucet", [
    inputAddress,
    "1000000000000000000000",
  ]);

  const sendTokenToUser = async () => {
    await sendToken();
    setLoading(false);
    setInputAddress("");
  };

  const inputMyAddress = () => {
    setInputAddress(address || "");
  };

  return (
    <div>
      <div>
        {tokenSymbol ? (
          <label
            htmlFor={`faucet-modal-${tokenSymbol}`}
            className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-info-contract hover:border-transparent rounded"
          >
            <span>Faucet</span>
          </label>
        ) : (
          <div className=" bg-gray-400 animate-pulse h-10 w-20  rounded" />
        )}
        <input type="checkbox" id={`faucet-modal-${tokenSymbol}`} className="modal-toggle" />
        <label htmlFor={`faucet-modal-${tokenSymbol}`} className="modal cursor-pointer">
          <label className="modal-box relative">
            <input className="h-0 w-0 absolute top-0 left-0" />
            <h3 className="text-xl font-bold mb-3">{tokenSymbol} Faucet</h3>
            <label
              htmlFor={`faucet-modal-${tokenSymbol}`}
              className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
            >
              ✕
            </label>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <div>
                  <span className="text-sm font-bold">From:</span>
                  <Address address={tokenAddress || ""} />
                </div>
                <div>
                  <span className="text-sm font-bold pl-3">Available:</span>
                  <br />
                  <span> ∞ {tokenSymbol}</span>
                </div>
                <div>
                  <span className="text-sm font-bold pl-3">Sending:</span>
                  <br />
                  <span>1K {tokenSymbol}</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <AddressInput
                  placeholder="Destination Address"
                  value={inputAddress}
                  onChange={value => setInputAddress(value)}
                />
                <button
                  className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3}`}
                  onClick={inputMyAddress}
                  disabled={loading}
                >
                  <span>Input my address</span>
                </button>
                <button
                  className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 ${
                    loading ? "loading before:!w-4 before:!h-4 before:!mx-0" : ""
                  }`}
                  onClick={sendTokenToUser}
                  disabled={loading}
                >
                  {!loading && <BanknotesIcon className="h-6 w-6" />}
                  <span>Send</span>
                </button>
              </div>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}
