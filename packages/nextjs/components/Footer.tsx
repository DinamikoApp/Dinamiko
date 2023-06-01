/* import { hardhat } from "wagmi/chains";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

import { Faucet } from "~~/components/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { getTargetNetwork } from "~~/utils/scaffold-eth"; */
import Link from "next/link";
import { faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwitchTheme } from "~~/components/SwitchTheme";

/**
 * Site footer
 */
export const Footer = () => {
  /*  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice); */

  return (
    /*  <div className="min-h-0 p-5 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-20 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex space-x-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div className="btn btn-primary btn-sm font-normal cursor-auto">
                <CurrencyDollarIcon className="h-4 w-4 mr-0.5" />
                <span>{nativeCurrencyPrice}</span>
              </div>
            )}
            {getTargetNetwork().id === hardhat.id && <Faucet />}
          </div>
          <SwitchTheme className="pointer-events-auto" />
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div>
              <a
                href="https://github.com/scaffold-eth/se-2"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Fork me
              </a>
            </div>
            <span>·</span>
            <div>
              Built with <HeartIcon className="inline-block h-4 w-4" /> at 🏰{" "}
              <a
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                BuidlGuidl
              </a>
            </div>
            <span>·</span>
            <div>
              <a
                href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                Support
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div> */

    <footer className="py-4 pb-12">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="flex items-center">
          <ul className="flex space-x-8">
            <li>about</li>
            <li>about </li>
            <li>about</li>
            <SwitchTheme className="pointer-events-auto" />
          </ul>
        </div>
        <div>
          <p className="mb-3">Connect with us:</p>
          <ul className="flex space-x-6 text-2xl">
            <li>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white rounded-full" />
              </Link>
            </li>
            <li>
              <Link href="https://telegram.org">
                <FontAwesomeIcon icon={faTelegram} className="text-white rounded-full" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FontAwesomeIcon icon={faTwitter} className="text-white rounded-full" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
