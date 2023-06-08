import React, { useState } from "react";

export function SubscriptionSelectAsset() {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const handleConditionClick = (asset: string) => {
    setSelectedAsset(asset);
  };

  const assets: string[] = ["ETH", "USDT", "BNB", "Matric", "ETH/USDT", "USDT/BUSD", "BNB/BTC", "Matric/USDT"];

  return (
    <div>
      <h1 className="text-sm font-medium mb-2">Create a Subscription</h1>
      <h2 className="text-2xl font-bold mb-4">Selection an Asset</h2>

      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 py-6 mx-auto">
          {assets.slice(0, 4).map((asset, index) => (
            <div
              className={`border border-gray-300 p-2 py-1 cursor-pointer ${
                selectedAsset === asset ? "border-blue-500" : ""
              }`}
              key={index}
              onClick={() => handleConditionClick(asset)}
            >
              <p className="font-medium text-center">{asset}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mx-auto">
          {assets.slice(4, 8).map((asset, index) => (
            <div
              className={`border border-gray-300 p-2 py-2 cursor-pointer ${
                selectedAsset === asset ? "border-blue-500" : ""
              }`}
              key={index}
              onClick={() => handleConditionClick(asset)}
            >
              <p className="font-medium text-center">{asset}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
