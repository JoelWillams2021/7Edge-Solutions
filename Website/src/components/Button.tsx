import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outlined'; // Optional prop to define the button style
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // Define styles for different button variants
  const primaryStyle =
    'min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0d65f2] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]';
  const secondaryStyle =
    'min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7ecf4] text-[#0d131c] text-sm font-bold leading-normal tracking-[0.015em]';
  const outlinedStyle =
    'min-w-[84px] max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-xl h-10 px-4 border-2 border-[#0d65f2] text-[#0d65f2] text-sm font-bold leading-normal tracking-[0.015em] bg-transparent';

  // Apply the correct style based on the variant prop
  const buttonStyle =
    variant === 'primary' ? primaryStyle : variant === 'secondary' ? secondaryStyle : outlinedStyle;

  return (
    <button className={buttonStyle} onClick={onClick}>
      <span className="truncate">{label}</span>
    </button>
  );
};

export default Button;


