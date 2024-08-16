import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  style?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type='button', style="primary" }) => {
  const buttonStyle = style === 'primary' ? 'bg-gray-200' : '';
  return (
    <div>
      <button
        className={`pointer-events-auto ml-1 mt-2 mb-2 rounded-md ${buttonStyle} px-2 py-1 text-[0.8125rem] text-gray-600 hover:bg-gray-200 hover:text-white`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
