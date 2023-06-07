import Link from "next/link";

type ActionButtonsProps = {
  previousHref?: string;
  nextHref: string;
};

const ActionButtons: React.FC<ActionButtonsProps> = ({ previousHref, nextHref }) => {
  return (
    <div className="flex justify-between mt-12 mt-8">
      {previousHref && (
        <Link href={previousHref} legacyBehavior>
          <a className=" hover:bg-white hover:text-black text-white py-2 px-4 rounded cursor-pointer border-2 border-white">
            Back
          </a>
        </Link>
      )}
      <Link href={nextHref} legacyBehavior>
        <a className="  hover:bg-white hover:text-black text-white py-2 px-4 rounded cursor-pointer border-2 border-white">
          Proceed
        </a>
      </Link>
    </div>
  );
};

export default ActionButtons;
