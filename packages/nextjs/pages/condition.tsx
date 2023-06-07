import React, { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import type { NextPage } from "next";

const ConditionSelection: NextPage = () => {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const handleConditionClick = (condition: string) => {
    setSelectedCondition(condition);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || /^[-+]?\d+(\s?\d+)?%?$/.test(value)) {
      setSelectedCondition(value);
    }
  };

  const conditions: string[] = ["-5%", "+10%", "+5%", "-10%"];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-sm font-medium mb-2">Create a Subscription</h1>
      <h2 className="text-2xl font-bold mb-4">Condition Selection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 py-12 mx-auto">
        {conditions.map((condition, index) => (
          <div
            className={`border border-gray-300 p-2 py-2 cursor-pointer ${
              selectedCondition === condition ? "border-blue-500" : ""
            }`}
            key={index}
            onClick={() => handleConditionClick(condition)}
          >
            <p className="text-lg font-medium text-center">{condition}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center mt-2 align-middle justify-center">
          <p className="mr-2">Custom value:</p>
          <input
            type="text"
            value={selectedCondition || ""}
            onChange={handleInputChange}
            className="border text-black border-gray-300 px-2 py-1 w-20"
          />
        </div>
      </div>

      <ActionButtons previousHref="/assetSelection" nextHref="/next-page" />
    </div>
  );
};

export default ConditionSelection;
