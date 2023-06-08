import Link from "next/link";
import { faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter from "~~/components/Newsletter";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="py-4 pb-12">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex items-center">
            <ul className="flex space-x-8">
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/"> About </Link>{" "}
              </li>
              <li>
                <Link href="/"> Settings </Link>
              </li>
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
    </>
  );
};
