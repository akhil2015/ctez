import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header2 from "../Header/Header2";
import theme from "../../Theme";
import Paper from "@material-ui/core/Paper";
import ExchgForm from "./ExchgForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(to right, #396afc, #2948ff)",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    overflow: "hidden",
    minHeight: "100vh",
  },
  glassColour1: {
    filter: "blur(200px)",
    position: "absolute",
    top: "-350px",
    width: "600px",
    height: "600px",
    background: "#ff359b",
    //zIndex: "-1",
  },
  glassColour2: {
    filter: "blur(150px)",
    position: "absolute",
    bottom: "-150px",
    left: "200px",
    right: "800px",
    height: "500px",
    width: "500px",
    background: "#92FE9D",
    //zIndex: "-1",
  },
  glassColour3: {
    filter: "blur(150px)",
    position: "absolute",
    bottom: "50px",
    right: "500px",
    left: "500px",
    width: "500px",
    height: "400px",
    background: "#00C9FF",
  },
  gridAlign: {
    //padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  form: {},
  glass: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    boxShadow: "0 25px 45px rgba(0,0,0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  },
  formTitle: {
    position: "relative",
    color: "#fff",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "20px",
  },
  formIPTitle: {
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    marginBottom: "20px",
  },
}));

function Swap() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const classes = useStyles();
  return (
    <div id='main'>
      <ThemeProvider theme={theme}>
        <Header2
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div className={classes.root}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "125vh",
              padding: "15%",
              marginTop: "7vh",
              width: "80%",
            }}
          >
            <div className={classes.glass} style={{ padding: "40px" }}>
              <ExchgForm />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Swap;
