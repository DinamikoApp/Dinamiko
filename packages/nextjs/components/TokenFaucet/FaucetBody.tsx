import millify from "millify";
import React from "react";
import { useMockTokenBalance, MockToken } from "~~/hooks/scaffold-eth";
import FaucetButton from "./FaucetButton";
export default function FaucetBody() {
  const batBalance = useMockTokenBalance("Bat");
  const daiBalance = useMockTokenBalance("Dai");
  const repBalance = useMockTokenBalance("Rep");
  const usdtBalance = useMockTokenBalance("Usdt");
  const wbtcBalance = useMockTokenBalance("Wbtc");
  const wethBalance = useMockTokenBalance("Weth");
  const zrxBalance = useMockTokenBalance("Zrx");

  const tokens = [batBalance, daiBalance, repBalance, usdtBalance, wbtcBalance, wethBalance, zrxBalance];

  return (
    <tbody>
      {tokens.map(({ balance, tokenName, tokenSymbol }: MockToken, index) => (
        <tr key={index} className="border-b">
          <td className="p-2 whitespace-nowrap text-md font-medium">
            {tokenSymbol ? (
              <div className="flex flex-row h-20">
                <img className="w-10 h-10 my-5" src={`/token/${tokenSymbol.toLowerCase()}.svg`} />
                <div className="ml-3">
                  <p className="m-0 mt-2 ">{tokenName}</p>
                  <p className="m-0 mt-2">{tokenSymbol}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row h-20  ">
                <div className="w-10 bg-gray-400 h-10 rounded-full my-5 animate-pulse" />
                <div className="ml-3">
                  <div className="w-40 h-8 mt-2 bg-gray-400 animate-pulse " />
                  <div className="w-20 h-4 mt-3 bg-gray-400 animate-pulse " />
                </div>
              </div>
            )}
          </td>
          <td>
            {tokenSymbol ? (
              <p className="text-sm font-bold px-6 py-4 whitespace-nowrap "> {millify(balance || 0)} </p>
            ) : (
              <p className="w-4 h-4 mt-3 bg-gray-400 animate-pulse ml-5 "> </p>
            )}
          </td>
          <td>
            <FaucetButton {...tokens[index]} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
