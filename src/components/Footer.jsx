import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            This is a concept based design and development for any query
          </p>
          <p className="font-semibold text-gray text-xs">
            call <span className="underline text-blue ">7799737788</span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Developed by Sri charan rayala
          </p>
          <div className="flex">
            <a
              className="font-semibold text-gray text-xs hover:underline cursor-pointer hover:text-white transistion-all duration-100"
              href="https://github.com/SCharan1134"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
