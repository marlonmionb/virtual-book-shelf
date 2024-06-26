import React, { ReactNode } from "react";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 flex justify-between px-2">{children}</nav>
    </div>
  );
};

export default NavBar;
