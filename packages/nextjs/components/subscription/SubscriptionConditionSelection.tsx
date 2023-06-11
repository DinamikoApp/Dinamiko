import React, { useState } from "react";
import { InputProps } from "~~/types/SelectProp";

export function SubscriptionConditionSelection(props: InputProps) {
  const [selectedCondition, setSelectedCondition] = useState<string>("");

  const handleConditionClick = (condition: string) => {
    setSelectedCondition(condition);
    props.onChange(condition);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || /^[-+]?\d+(\s?\d+)?%?$/.test(value)) {
      setSelectedCondition(value);
      props.onChange(value);
    }
  };

  const conditions: string[] = ["-5%", "+10%", "+5%", "-10%"];

  return (
    <div>
      <h1 className="text-sm font-medium mb-2">Create a Subscription</h1>
      <h2 className="text-2xl font-bold mb-4">Condition Selection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 py-12 mx-auto">
        {conditions.map((condition, index) => (
          <div
            className={` bg-[#00022C] p-1 cursor-pointer ${selectedCondition === condition ? "bg-gradient" : ""}`}
            key={index}
            onClick={() => handleConditionClick(condition)}
          >
            <div className="p-2 py-2 bg-[#00022C]">
              <p className="text-lg font-medium text-center">{condition}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center mt-2 align-middle justify-center">
          <p className="mr-6 text-xl">Custom value</p>
          <input
            type="text"
            value={selectedCondition || "0%"}
            onChange={handleInputChange}
            className="border text-black bg-[#D9D9D9] px-2 py-1 w-40 text-center text-xl"
          />
        </div>
      </div>
    </div>
  );
}
