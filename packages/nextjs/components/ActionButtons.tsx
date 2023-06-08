import React from "react";

type ActionButtonsProps = {
  onPrevious?: () => void;
  onNext: () => void;
  isLastStep: boolean;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ onPrevious, onNext, isLastStep }) => {
  return (
    <div className="flex justify-between mt-12">
      {onPrevious && (
        <button
          onClick={onPrevious}
          className="hover:bg-white hover:text-black text-white py-2 px-4 cursor-pointer border-2 border-white"
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        className="hover:bg-white hover:text-black text-white py-3 px-6 cursor-pointer border-2 border-none bg-gradient"
      >
        {isLastStep ? "Finish" : "Proceed"}
      </button>
    </div>
  );
};

export default ActionButtons;
