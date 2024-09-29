import React from 'react';
import Button from './Button';  // Importing the Button component

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d131c]">
        <div className="size-4">
          {/* SVG Logo */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Add the paths */}
            <g clipPath="url(#clip0_6_543)">
              <path
                d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <h2 className="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">Seven Edge Technologies</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#0d131c] text-sm font-medium leading-normal" href="/portfolio">
            Portfolio
          </a>
          <a className="text-[#0d131c] text-sm font-medium leading-normal" href="/about-us">
            About Us
          </a>
          <a className="text-[#0d131c] text-sm font-medium leading-normal" href="/contact">
            Contact Us
          </a>
        </div>
        <Button label="Get started" />
      </div>
    </header>
  );
};

export default Header;
