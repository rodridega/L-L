import React from "react";
import "./styles/styles.scss";

import { MainScreen } from "./components/Layout/MainScreen";
import { MyMenu } from "./components/Layout/MyMenu";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <MyMenu />

      <MainScreen />
    </ShopProvider>
  );
}

export default App;
