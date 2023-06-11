import React, { useState } from "react";

export function SubscriptionAmountSelection() {
  const [selectedAmount, setSelectedAmount] = useState<string>("");

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    /*     props.onChange(amount);
     */
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedAmount(value);
    /* props.onChange(value); */
  };

  const amounts: string[] = ["10", "50", "100", "500"];

  return (
    <div>
      <h1 className="text-sm font-medium mb-2">Create a Subscription</h1>
      <h2 className="text-2xl font-bold mb-4">Amount Selection (USDT)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-3/4 py-12 mx-auto">
        {amounts.map((amount, index) => (
          <div
            className={` bg-[#00022C] p-1 cursor-pointer ${selectedAmount === amount ? "bg-gradient" : ""}`}
            key={index}
            onClick={() => handleAmountClick(amount)}
          >
            <div className="p-2 py-2 bg-[#00022C]">
              <p className="text-lg font-medium text-center">{amount}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center mt-2 align-middle justify-center">
          <p className="mr-6 text-xl">Custom amount</p>
          <input
            type="number"
            value={selectedAmount || ""}
            onChange={handleInputChange}
            className="border text-black bg-[#D9D9D9] px-2 py-1 w-40 text-center text-xl"
          />
        </div>
      </div>
    </div>
  );
}
