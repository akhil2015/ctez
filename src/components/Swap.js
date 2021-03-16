import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Header/Theme";

function Swap() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <div id='main'>
      <ThemeProvider theme={theme}>
        <Header2
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Paper elevation={3}>Swap</Paper>
      </ThemeProvider>
    </div>
  );
}

export default Swap;
