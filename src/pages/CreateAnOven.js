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
import styles from "./styles.css";

//For header
import Header2 from "../components/Header/Header2";
import theme from "../components/Header/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    background: "rgba(207, 209, 217, 0.35)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(0.0px)",
    WebkitBackdropFilter: "blur(0.0px)",
    borderRadius: "10px",
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
        <div style={{ display: "grid", placeItems: "center", height: "65vh" }}>
          <div className={classes.glass} style={{ padding: "20px" }}>
            <FormControl
              className={classes.formControl}
              fullWidth
              style={{ marginLeft: "-1.5px" }}
            >
              <InputLabel htmlFor='age-native-simple'>Delegate</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label='None' value='' />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>

            <FormControl component='fieldset' style={{}} fullWidth>
              <FormLabel
                component='legend'
                labelPlacement='start'
                style={{ marginLeft: "-30px" }}
              >
                Who can deposit?
              </FormLabel>
              <RadioGroup
                aria-label='deposit'
                name='deposit'
                value={state.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='Whitelist'
                  control={<Radio />}
                  label='Whitelist'
                />
                <FormControlLabel
                  value='Everyone'
                  control={<Radio />}
                  label='Everyone'
                />
              </RadioGroup>
            </FormControl>
            <TextField
              style={{ marginTop: "10px" }}
              fullWidth
              id='outlined-number'
              label='Initial deposit(in XTZ)'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
              variant='outlined'
            />
            <TextField
              style={{ marginTop: "10px" }}
              fullWidth
              id='outlined-search'
              label='Search field'
              type='search'
              variant='outlined'
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
