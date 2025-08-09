import Image from 'next/image';
import Link from 'next/link';
// import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
import PageSelector from "@/components/LegalPageSelector";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-500 py-14 relative" id='footer'>
     
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Grid for Top Part of Footer */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Column (Logo & Info) */}
          <div className='max-sm:place-self-center max-md:place-self-auto'>
            <Link href="/" >
              <Image
                alt="Logo"
                src="/images/logos/logo.svg"
                className=""
                width={300}
                height={120}
              />
            </Link>
          </div>

          {/* Second Column (Nested Grid with 4 Columns) */}
          <div className="grid grid-cols-2 max-sm:gap-4 sm:grid-cols-2 gap-8 p-2">
            {/* Column 1 */}
            <div>
              <h5 className="font-semibold text-lg mb-2">About</h5>
              <ul className="space-y-4">
                <li>
                  <Link href="/link1" className="hover:text-primary-500 text-sm ">
                    Best Time to Visit
                  </Link>
                </li>

                <li>
                  <Link href="/link3" className="hover:text-primary-500 text-sm ">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/link3" className="hover:text-primary-500 text-sm ">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/link3" className="hover:text-primary-500 text-sm ">
                    Forums
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h5 className="font-semibold text-lg mb-2">Support</h5>
              <PageSelector />
            </div>

          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="relative mt-8">
          <div className="relative flex flex-col md:flex-row  items-center border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-900 text-center md:text-left mb-4 md:mb-0">
              &copy; 2014 - {new Date().getFullYear()} centridox BV.
            </p>
            {/* <div className="flex space-x-4 justify-center md:justify-end">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-900 hover:text-secondary-500">
                <FaTiktok className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-900 hover:text-secondary-500">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-900 hover:text-secondary-500">
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-900 hover:text-secondary-500">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
