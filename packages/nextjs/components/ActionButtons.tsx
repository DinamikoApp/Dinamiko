import React from "react";

type ActionButtonsProps = {
  onPrevious?: () => void;
  onNext: () => void;
  onFinish: () => void;
  isLastStep: boolean;
  index: number;
  disabled: boolean;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ onPrevious, onNext, onFinish, isLastStep, index, disabled }) => {
  return (
    <div className="flex justify-between mt-12">
      {index !== 1 && (
        <button
          disabled={!disabled}
          onClick={onPrevious}
          className="hover:bg-white hover:text-black text-white py-2 px-4 cursor-pointer border-2 border-white"
        >
          Back
        </button>
      )}
      <button
        disabled={!disabled}
        onClick={!isLastStep ? onNext : onFinish}
        className="hover:bg-white hover:text-black text-white py-3 px-6 cursor-pointer border-2 border-none bg-gradient"
      >
        {isLastStep ? "Finish" : "Proceed"}
      </button>
    </div>
  );
};

export default ActionButtons;
