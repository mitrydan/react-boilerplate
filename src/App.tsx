import React from "react";
import AppContextWrapper from "./context";
import { WelcomePage } from "./pages";
import { AppContextType } from "./types";
import "./App.scss";

const defaultContext = {
  getUsername: () => "username",
  getUseremail: () => "useremail",
} as AppContextType;

const App: React.FC = () => (
  <AppContextWrapper defaultContext={defaultContext}>
    <WelcomePage className="App" />
  </AppContextWrapper>
);

export default App;
