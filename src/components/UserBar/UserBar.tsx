import React, { ReactNode } from "react";

interface UserBarProps {
  children?: ReactNode;
  path: string;
  alternative?: string;
  className?: string;
}

const UserBar: React.FC<UserBarProps> = ({ children, path, alternative, className }) => {
  return (
    <div className={className}>
      <img className="h-14 w-14 rounded-full" src={path} alt={alternative} />
      <h4 className="text-center font-semibold mt-1 ml-1">{children}</h4>
    </div>
  );
};

export default UserBar;
