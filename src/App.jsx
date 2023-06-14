import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyles from "./styles/GlobalStyles";
import SettingsProvider from "./context/SettingsContext";
import DictionaryProvider from "./context/DictionaryContext";

function App() {
  return (
    <SettingsProvider>
      <DictionaryProvider>
        <GlobalStyles />
        <Header />
        <Main />
      </DictionaryProvider>
    </SettingsProvider>
  );
}

export default App;
