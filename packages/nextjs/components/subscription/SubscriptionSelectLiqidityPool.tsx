import React, { useState } from "react";
import { SUPPORTED_LIQUIDITY_POOLS } from "../../networkHelpers";
import { InputProps } from "~~/types/SelectProp";

export function SubscriptionSelectLiquidityPool(prop: InputProps) {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const handleConditionClick = (asset: string) => {
    setSelectedAsset(asset);
    prop.onChange(asset);
  };

  const assets: string[] = Object.keys(SUPPORTED_LIQUIDITY_POOLS);

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
