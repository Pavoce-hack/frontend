'use client'

import { CustomButtonTypes } from "@/types/button"

interface CustomButtonProps extends CustomButtonTypes {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  border = '1px solid #3A62F2',
  onClick,
  background = '#FFFFFF',
  textColor = '#3A62F2',
  padding = '10px 20px',
  cursor = 'pointer',
  children,
  textSize = '1rem',
}) => {
  const buttonStyle = {
    border,
    background,
    padding,
    cursor,
    color: textColor,
    fontSize: textSize,
  };

  return (
    <button className="center sans border w-full hover:scale-95 transition duration-300 rounded-lg gap-2 font-semibold" onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default CustomButton;