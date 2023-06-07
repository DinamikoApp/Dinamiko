import { useEffect, useState } from "react";
import Head from "next/head";
import ActionButtons from "../components/ActionButtons";

const TimeBasedSubscription = () => {
  const [customTimeValue, setCustomTimeValue] = useState("1");
  const [customTimeUnit, setCustomTimeUnit] = useState("hour");
  const [selectedCustomTime, setSelectedCustomTime] = useState("");

  const boxes = [
    { label: "Every hour", value: "hour" },
    { label: "Every day", value: "day" },
    { label: "Every week", value: "week" },
    { label: "Every month", value: "month" },
  ];

  const handleCustomTimeValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTimeValue(event.target.value);
  };

  const handleBoxClick = (value: string) => {
    setCustomTimeValue("1");
    setCustomTimeUnit(value);
  };

  useEffect(() => {
    const getCustomTime = () => {
      const timeValue = customTimeValue === "1" ? "1" : customTimeValue;
      setSelectedCustomTime(`${timeValue} ${customTimeUnit}`);
    };

    getCustomTime();
  }, [customTimeValue, customTimeUnit]);

  const isActiveBox = (value: string) => {
    return customTimeValue === "1" && customTimeUnit === value;
  };

  return (
    <>
      <Head>
        <title>Timebased Subscription</title>
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text mb-4">Create a subscription</h2>
        <h1 className="text-3xl font-bold mb-4">Time based subscription</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-32 w-3/4 mx-auto">
          {boxes.map(box => (
            <div
              key={box.value}
              className={`border p-2 text-center cursor-pointer bg-darkblue ${
                isActiveBox(box.value) ? "border-2 border-white" : ""
              }`}
              onClick={() => handleBoxClick(box.value)}
            >
              {box.label}
            </div>
          ))}
        </div>

        <div className="flex mt-4 align-middle justify-center">
          <div className="mr-2">
            <span className="font-bold">Custom time:</span>
            <input
              type="text"
              className="border text-black border-gray-300 px-2 py-1 ml-2"
              value={customTimeValue}
              onChange={handleCustomTimeValueChange}
            />
          </div>

          <div>
            <select
              className="border border-gray-300 px-2 py-1 ml-2 text-black"
              value={customTimeUnit}
              onChange={e => setCustomTimeUnit(e.target.value)}
            >
              <option value="hour">hour(s)</option>
              <option value="day">day(s)</option>
              <option value="week">week(s)</option>
              <option value="month">month(s)</option>
            </select>
          </div>
        </div>

        <ActionButtons previousHref="/condition" nextHref="/assetSelection" />

        {/* ---For development purpose ---- */}
        <div className="mt-4">Selected custom time: {selectedCustomTime}</div>
      </div>
    </>
  );
};

export default TimeBasedSubscription;
