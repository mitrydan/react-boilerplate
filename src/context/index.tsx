import React, { ReactNode } from "react";
import { AppContextType } from "../types";

export const AppContext = React.createContext<AppContextType>(
  {} as AppContextType,
);

type AppContextWrapperProps = {
  children?: ReactNode | undefined;
  defaultContext: AppContextType;
};

const AppContextWrapper: React.FC<AppContextWrapperProps> = ({
  children,
  defaultContext,
}) => (
  <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
);

AppContextWrapper.defaultProps = {
  children: undefined,
};

export default AppContextWrapper;
