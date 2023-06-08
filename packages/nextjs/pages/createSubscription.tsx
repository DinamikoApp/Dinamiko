import React, { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import type { NextPage } from "next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubscriptionAction } from "~~/components/subscription/SubscriptionAction";
import { SubscriptionConditionSelection } from "~~/components/subscription/SubscriptionConditionSelection";
import { SubscriptionSelectAsset } from "~~/components/subscription/SubscriptionSelectAsset";
import { SubscriptionTimeBasedSubscription } from "~~/components/subscription/SubscriptionTimeBasedSubscription";
import { SubscriptionType } from "~~/components/subscription/SubscriptionType";

const CreateSubscription: NextPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleFinish = () => {
    toast.success("Subscription completed!");
  };

  const isLastStep = currentStep === 5;

  return (
    <section className="container mx-auto p-8">
      {currentStep === 1 && <SubscriptionType />}
      {currentStep === 2 && <SubscriptionAction />}
      {currentStep === 3 && <SubscriptionSelectAsset />}
      {currentStep === 4 && <SubscriptionConditionSelection />}
      {currentStep === 5 && <SubscriptionTimeBasedSubscription />}

      <ActionButtons
        onPrevious={currentStep > 1 ? handlePrevious : undefined}
        onNext={currentStep < 5 ? handleNext : handleFinish}
        isLastStep={isLastStep}
      />
      <ToastContainer />
    </section>
  );
};

export default CreateSubscription;
