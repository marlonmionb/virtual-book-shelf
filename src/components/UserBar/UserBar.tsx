import React, { ReactNode } from "react";

interface UserBarProps {
  children?: ReactNode;
  path: string;
  alternative?: string;
}

const UserBar: React.FC<UserBarProps> = ({ children, path, alternative }) => {
  return (
    <div className="flex space-between">
      <img className="h-8 w-8 rounded-full" src={path} alt={alternative} />
      <h4 className="text-center font-semibold mt-1 ml-1">{children}</h4>
    </div>
  );
};

export default UserBar;
