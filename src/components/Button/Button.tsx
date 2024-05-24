import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type='button' }) => {
  return (
    <div>
      <button
        className="pointer-events-auto ml-1 mt-2 mb-2 rounded-md bg-gray-100 px-2 py-1 text-[0.8125rem] font-semibold text-gray-400 hover:bg-gray-200 hover:text-white"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
