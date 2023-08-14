"use client";

import { CustomButtonTypes } from "@/types/button";

interface CustomButtonProps extends CustomButtonTypes {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonType?: "button" | "submit" | "reset" | undefined
}

const CustomButton: React.FC<CustomButtonProps> = ({
  border = "1px solid #3A62F2",
  onClick,
  background = "#FFFFFF",
  textColor = "#3A62F2",
  padding = "10px 20px",
  cursor = "pointer",
  children,
<<<<<<< HEAD
  textSize = '1rem',
  disabled,
=======
  textSize = "1rem",
  buttonType,
>>>>>>> 541902556a04e9adf2edb27f70a69cf8241a3160
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
    <button
      className="center sans border w-full hover:scale-95 transition duration-300 rounded-lg gap-2 font-semibold"
      onClick={onClick}
      style={buttonStyle}
      type={buttonType}
    >
      {children}
    </button>
  );
};

export default CustomButton;
