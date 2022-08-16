import React from "react";
import cn from "classnames";
import cls from "./header.module.scss";

type HeaderProps = {
  className?: string;
  username: string;
  useremail: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = ({ className, username, useremail }) => (
  <div className={cn(className, cls.header)}>
    <p>{username}</p>
    <p>{useremail}</p>
  </div>
);

Header.defaultProps = {
  className: undefined,
};

export default Header;
