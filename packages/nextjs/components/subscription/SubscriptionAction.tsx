import React, { useState } from "react";
import Image from "next/image";

interface SubscriptionAction {
  id: number;
  title: string;
  imageSrc: string;
}

export function SubscriptionAction() {
  const [selectedAction, setSelectedAction] = useState<number | null>(null);

  const handleActionChange = (actionId: number) => {
    setSelectedAction(actionId);
  };

  const actions: SubscriptionAction[] = [
    {
      id: 1,
      title: "Buy assets",
      imageSrc: "/assets/img/buy-assets.svg",
    },
    {
      id: 2,
      title: "Sell assets",
      imageSrc: "/assets/img/3d-sold.svg",
    },
    {
      id: 3,
      title: "Add liquidity",
      imageSrc: "/assets/img/3d-hourglass.svg",
    },
  ];

  return (
    <div>
      <h1 className="text-sm font-medium mb-4">Create a Subscription</h1>
      <h2 className="text-3xl font-medium mb-4">Subscription action</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto py-6">
        {actions.map(action => (
          <div key={action.id} className={`p-1 ${selectedAction === action.id ? "bg-gradient" : "bg-lightgradient"}`}>
            <div className="p-4 relative bg-primary">
              <label className="absolute top-2 right-2">
                <input
                  type="radio"
                  name="action"
                  value={action.id}
                  checked={selectedAction === action.id}
                  onChange={() => handleActionChange(action.id)}
                  className="form-radio h-4 w-4 text-blue-500 cursor-pointer"
                />
              </label>
              <Image src={action.imageSrc} alt={action.title} width={300} height={200} className="mb-2" />
              <p className="font-medium text-center">{action.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
