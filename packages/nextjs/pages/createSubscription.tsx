import React, { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import moment from "moment";
import type { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";
import { SubscriptionAction } from "~~/components/subscription/SubscriptionAction";
import { SubscriptionAmountSelection } from "~~/components/subscription/SubscriptionAmount";
import { SubscriptionConditionSelection } from "~~/components/subscription/SubscriptionConditionSelection";
import { SubscriptionSelectAsset } from "~~/components/subscription/SubscriptionSelectAsset";
import { SubscriptionSelectLiquidityPool } from "~~/components/subscription/SubscriptionSelectLiqidityPool";
import { SubscriptionTimeBasedSubscription } from "~~/components/subscription/SubscriptionTimeBasedSubscription";
import { SubscriptionType } from "~~/components/subscription/SubscriptionType";
import { saveSubscription } from "~~/firebase/firestore";
import { convertSubscriptionTransaction } from "~~/firebase/firestore/ToText";

const SelectAssetsType = ({
  target,
  onSelectAsset,
  onSelectLiquidity,
}: {
  target: number;
  onSelectAsset: (text: string) => void;
  onSelectLiquidity: (text: string) => void;
}) => {
  if (target === 2) {
    return <SubscriptionSelectLiquidityPool onChange={onSelectLiquidity} />;
  }
  return <SubscriptionSelectAsset onChange={onSelectAsset} />;
};

const CreateSubscription: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [subscription, setSubscription] = useState(0);
  const [subscriptionAction, setSubscriptionAction] = useState(0);
  const [asset, setAsset] = useState("");
  const [liquidityPool, setLiquidityPool] = useState("");
  const [subscriptionCondition, setSubscriptionCondition] = useState(0);
  const [subscriptionTime, setSubscriptionTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { address, isConnected } = useAccount();

  const handleNext = () => {
    if (currentStep === 1 && subscription !== 0) {
      setCurrentStep(3);
    } else {
      setCurrentStep(prevStep => prevStep + 1);
    }
    if (currentStep + 1 === 6) setIsFinished(true);
  };

  const handlePrevious = () => {
    if (currentStep + 1 >= 6) setIsFinished(false);
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleFinish = () => {
    const data = {
      type: subscription,
      action: subscriptionAction,
      asset,
      liquidityPool,
      subscriptionCondition,
      subscriptionTime,
    };
    const subscriptionData = convertSubscriptionTransaction(data, 1);
    if (subscriptionData) {
      setCurrentStep(1);
      setIsFinished(false);
      saveSubscription(subscriptionData, address || "");
      toast.success("Subscription completed!");
    }
  };

  const handleSubSelect = (index: number) => setSubscription(index);

  const handleActionSelect = (index: number) => setSubscriptionAction(index);

  const handleSelectAsset = (text: any) => setAsset(`${text}`);

  const handleSelectLiquidityPool = (text: string) => setLiquidityPool(text);

  const handleSelectCondition = (text: string) => {
    setSubscriptionCondition(parseInt(text));
  };

  const handleDateChange = (time: string, uint: string) => {
    let timeFrame = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    if (uint === "hour") timeFrame = moment.duration({ hours: parseInt(time) }).asSeconds();
    if (uint === "day") timeFrame = moment.duration({ days: parseInt(time) }).asSeconds();
    if (uint === "week") timeFrame = moment.duration({ weeks: parseInt(time) }).asSeconds();
    if (uint === "month") timeFrame = moment.duration({ months: parseInt(time) }).asSeconds();
    setSubscriptionTime(timeFrame);
  };

  return (
    <section className="container mx-auto p-8">
      {currentStep === 1 && <SubscriptionType onSelect={handleSubSelect} />}
      {currentStep === 2 && subscription === 0 && <SubscriptionTimeBasedSubscription onChange={handleDateChange} />}
      {currentStep === 2 && subscription !== 0 && <SubscriptionAction onSelect={handleActionSelect} />}
      {currentStep === 3 && <SubscriptionAction onSelect={handleActionSelect} />}
      {currentStep === 4 && (
        <SelectAssetsType
          target={subscriptionAction}
          onSelectLiquidity={handleSelectLiquidityPool}
          onSelectAsset={handleSelectAsset}
        />
      )}
      {currentStep === 5 && <SubscriptionConditionSelection onChange={handleSelectCondition} />}

      {currentStep === 6 && <SubscriptionAmountSelection />}

      <ActionButtons
        onFinish={handleFinish}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isLastStep={isFinished}
        index={currentStep}
        disabled={isConnected}
      />
      <ToastContainer />
    </section>
  );
};

export default CreateSubscription;
