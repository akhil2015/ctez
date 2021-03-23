import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

//CSS
//import "./styles.css";

//For header
import Header2 from "../../components/Header/Header2";
import theme from "../../Theme";
// import { MenuItem } from "@material-ui/core";

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
    backgroundImage: "linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    overflow: "hidden",
    //minHeight: "100vh",
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

export default function CreateAnOven() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "",
    amount: "",
    gender: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
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
            height: "20vh",
            padding: "15%",
            marginTop: "-63vh",
            width: "60%",
            color: "#fff",
          }}
        >
          <div className={classes.glass} style={{ padding: "30px" }}>
            <div className='box'></div>
            <h2 className={classes.formTitle} style={{ marginTop: "-10px" }}>
              Remove Liquidity
            </h2>
            <text
              className={classes.formIPTitle}
              style={{
                color: "#fff",
                float: "left",
                marginLeft: "5%",
                marginBottom: "12px",
              }}
            >
              To
            </text>
            <TextField
              required
              InputProps={{ disableUnderline: true }}
              id='standard-required'
              //label='Required'
              defaultValue=''
              style={{
                width: "90%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                outline: "none",
                padding: "7px 15px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "16px",
                color: "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            />

            <text
              className={classes.formIPTitle}
              style={{
                color: "#fff",
                float: "left",
                marginLeft: "5%",
                marginBottom: "12px",
              }}
            >
              LQT to burn
            </text>
            <TextField
              fullWidth
              disableUnderline={true}
              id='standard-number'
              //label='Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ disableUnderline: true }}
              style={{
                width: "90%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                outline: "none",
                padding: "7px 15px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "16px",
                color: "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            />
            <text
              className={classes.formIPTitle}
              style={{
                color: "#fff",
                float: "left",
                marginLeft: "5%",
                marginBottom: "12px",
              }}
            >
              tez to withdraw (Min)
            </text>
            <TextField
              fullWidth
              disableUnderline={true}
              id='standard-number'
              //label='Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ disableUnderline: true }}
              style={{
                width: "90%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                outline: "none",
                padding: "7px 15px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "16px",
                color: "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            />
            <text
              className={classes.formIPTitle}
              style={{
                color: "#fff",
                float: "left",
                marginLeft: "5%",
                marginBottom: "12px",
              }}
            >
              ctez to withdraw (Min)
            </text>
            <TextField
              fullWidth
              disableUnderline={true}
              id='standard-number'
              //label='Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ disableUnderline: true }}
              style={{
                width: "90%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                outline: "none",
                padding: "7px 15px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "16px",
                color: "#000",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            />

            <text
              className={classes.formIPTitle}
              style={{
                color: "#fff",
                float: "left",
                marginLeft: "5%",
                marginBottom: "12px",
              }}
            >
              Deadline
            </text>

            <TextField
              id='datetime-local'
              //label='Next appointment'
              type='datetime-local'
              defaultValue='2017-05-24T10:30'
              className={classes.textField}
              //   InputLabelProps={{
              //     shrink: true,
              //     disableUnderline: true,
              //   }}
              InputProps={{ disableUnderline: true }}
              disableUnderline={true}
              style={{
                width: "90%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                outline: "none",
                padding: "7px 15px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "16px",
                color: "#fff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
