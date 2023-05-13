import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t-2 border-gray-800 bg-primary  w-full   py-4   space-y-3 md:space-y-0 ">
      <div className="flex items-center justify-center     space-x-3 md:mx-5 ">
        <div className="  ">
          <p className="font-sans text-sm md:text-lg">Contact :</p>
        </div>

        <div className=" flex space-x-5 ">
          <div className="text-accent">
            <a
              href="https://github.com/wissamh79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="text-accent">
            <a
              href="https://twitter.com/Wisamh79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end  ">
        <p className=" text-center font-sans text-sm md:text-base font-semibold space-x-2">
          <span>Created by</span>
          <span className="text-accent font-sans text-lg md:text-xl  font-bold  font-signature">
            Wissam Hassan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
