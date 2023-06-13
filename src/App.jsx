import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";
import SettingsProvider from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <GlobalStyles />
      <Header />
      <Main />
    </SettingsProvider>
  );
}

export default App;
