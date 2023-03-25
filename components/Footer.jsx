import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NavLogo from "../public/assets/navLogo.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#C1A45D] text-white">
      <div className="container flex items-center justify-between flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
         <div className="flex items-center justify-between ml-5 my-4 w-full sm:w-[100%]">
                 <Link className="flex" href="/">
                    <Image
                      src={NavLogo}
                      alt="/"
                      width="80"
                      height="70"
                      className="mt-3 cursor-pointer"
                    />    
                    <h2 className="text-[#EC0024] mt-9"><span className="text-[#113476]">G</span>arena</h2>
                </Link>
                
                <div className="">
                  <ul className='flex space-x-6 uppercase'>
                    <li>Maharani</li>
                    <li>Maskharor </li>
                    <li>AUFA</li>
                    <li>Andini</li>
                  </ul>
              </div>
                
              </div>
      </div>
        <div className="flex items-center justify-center px-6 pb-5 text-sm">
          <span className="text-white">© Masyita Andini Larasati.</span>
        </div>
    </footer>
  );
};

export default Footer;
