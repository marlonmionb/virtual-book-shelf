import React, { ReactNode } from "react";


interface ButtonProps {
  onClick: () => void;
  type?: "submit" | "reset" | "button"
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        className="pointer-events-auto ml-8 mt-8 rounded-md bg-gray-100 px-2 py-1 text-[0.8125rem] font-semibold text-gray-400 hover:bg-gray-200 hover:text-white"
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;