import React from "react";
import cn from "classnames";
import cls from "./welcome.module.scss";
import { AppContext } from "../../context";
import { Header } from "../../components";

type WelcomePageProps = {
  className?: string;
};

const WelcomePage: React.FC<WelcomePageProps> = ({ className }) => {
  const { getUsername, getUseremail } = React.useContext(AppContext);

  return (
    <div className={cn(className, cls.welcome)}>
      <Header username={getUsername()} useremail={getUseremail()} />
    </div>
  );
};

WelcomePage.defaultProps = {
  className: undefined,
};

export default WelcomePage;
