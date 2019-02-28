/* @flow */
import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import { PALETTE } from "./constants/palette";

const styles = {
  app: {
    backgroundColor: PALETTE.background,
    display: "flex",
    flexDirection: "column",
    minHeight: "100%"
  },
  base: {
    backgroundColor: PALETTE.black,
    paddingLeft: "auto",
    paddingRight: "auto"
  },
  sides: {
    minWidth: 10
  }
};

/**
 * App
 */
const App = () => {
  return (
    <div style={styles.base}>
      <div style={styles.sides} />
      <div style={styles.app}>
        <Header />
        <Body />
      </div>
      <div style={styles.sides} />
    </div>
  );
};

export default App;
