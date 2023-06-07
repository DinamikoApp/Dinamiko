import React, { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import type { NextPage } from "next";

const ConditionSelection: NextPage = () => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const handleConditionClick = (condition: string) => {
    setSelectedCondition(condition);
  };

  const conditions: string[] = ["ETH", "USDT", "BNB", "Matric", "ETH/USDT", "USDT/BUSD", "BNB/BTC", "Matric/USDT"];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-sm font-medium mb-2">Create a Subscription</h1>
      <h2 className="text-2xl font-bold mb-4">Selection an Asset</h2>

      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-3/4 py-6 mx-auto">
          {conditions.slice(0, 4).map((condition, index) => (
            <div
              className={`border border-gray-300 p-2 py-1 cursor-pointer ${
                selectedCondition === condition ? "border-blue-500" : ""
              }`}
              key={index}
              onClick={() => handleConditionClick(condition)}
            >
              <p className="font-medium text-center">{condition}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mx-auto">
          {conditions.slice(4, 8).map((condition, index) => (
            <div
              className={`border border-gray-300 p-2 py-2 cursor-pointer ${
                selectedCondition === condition ? "border-blue-500" : ""
              }`}
              key={index}
              onClick={() => handleConditionClick(condition)}
            >
              <p className="font-medium text-center">{condition}</p>
            </div>
          ))}
        </div>
      </div>

      <ActionButtons previousHref="/action" nextHref="/condition" />
    </div>
  );
};

export default ConditionSelection;
