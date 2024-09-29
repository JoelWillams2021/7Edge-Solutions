import React from 'react';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, primary = true, onClick }) => {
  const primaryStyle =
    'min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d65f2] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]';
  const secondaryStyle =
    'min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7ecf4] text-[#0d131c] text-sm font-bold leading-normal tracking-[0.015em]';
  return (
    <button className={primary ? primaryStyle : secondaryStyle} onClick={onClick}>
      <span className="truncate">{label}</span>
    </button>
  );
};

export default Button;

