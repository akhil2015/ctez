import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";

//CSS
//import "./styles.css";

//Assets
import tokenLogo from "../../ctez.svg";
import xtzLogo from "../../tezos-xtz-logo.png";

//For header
import Header2 from "../../components/Header/Header2";
import theme from "../../Theme";
import { IconButton } from "@material-ui/core";
// import { MenuItem } from "@material-ui/core";

//ConseilJS
// import {
//   unlockFundraiser,
//   getAccountDetails,
//   getRevealResults,
// } from "../../utils/conseilUtils";
// import { getInitIdentity } from "../../utils/general";

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
    fontSize: "25px",
    fontWeight: "700",
    letterSpacing: "1px",
    marginBottom: "20px",
  },
  formIPTitle: {
    //fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "1px",
    marginBottom: "20px",
    color: "#fff",
    float: "left",
    marginLeft: "8%",
    marginBottom: "5px",
    fontSize: "15px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "85%",
    //background: "rgba(255, 255, 255, 0.2)",
    background: "#fff",
    border: "none",
    outline: "none",
    padding: "3px 7px",
    borderRadius: "4px",
    //border: "1px solid rgba(255, 255, 255, 0.5)",
    //borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    //borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "16px",
    color: "#000",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    textDecoration: "none",
    //marginBottom: "3%",
  },
}));

export default function AddLiquidity() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "",
    amount: "",
    gender: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  //ConseilJS
  // const [conseilState, setConseilState] = React.useState({
  //   mnemonic: "",
  //   password: "",
  //   pkh: "",
  //   email: "",
  //   secret: "",
  //   isUnlocked: false,
  //   onInputChange: "",
  //   error: "",
  // });

  // const isActivated = async (pkh) => {
  //   try {
  //     const queryResults = await getAccountDetails(pkh);
  //     const account = queryResults[0];
  //     return account.account_id === pkh;
  //   } catch (err) {
  //     return false;
  //   }
  // };

  // const isRevealed = async (keyStore) => {
  //   try {
  //     const queryResults = await getRevealResults(keyStore);
  //     return queryResults;
  //   } catch (err) {
  //     return false;
  //   }
  // };

  const setActiveTab = (isActive, isRevealed, newIdentity) => {
    let tabInfo = {
      activeTab: 0,
      activatedTabsCount: 1,
    };

    if (!isActive) {
      tabInfo.activeTab = 0;
      tabInfo.activatedTabsCount = 1;
    } else if (!isRevealed) {
      tabInfo.activeTab = 1;
      tabInfo.activatedTabsCount = 2;
      newIdentity.active = true;
    } else {
      tabInfo.activeTab = 2;
      tabInfo.activatedTabsCount = 3;
      newIdentity.active = true;
      newIdentity.reveal = true;
    }

    return [tabInfo, newIdentity];
  };

  // const handelSubmit = async (event) => {
  //   event.preventDefault();
  //   setConseilState({ error: "" });
  //   const { mnemonic, password, pkh, email, secret } = conseilState;

  //   const keyStore = await unlockFundraiser(mnemonic, email, password, pkh);

  //   if (!keyStore.error) {
  //     setConseilState({ isUnlocked: true });
  //     const initIdentity = getInitIdentity();
  //     const newIdentity = { ...initIdentity, ...keyStore };
  //     const isActive = await isActivated(keyStore.publicKeyHash);
  //     const isRevealed = await isRevealed(keyStore);
  //     const activeTabResults = setActiveTab(isActive, isRevealed, newIdentity);
  //     const activeTab = activeTabResults[0].activeTab;
  //     const activeTabsCount = activeTabResults[0].activeTabResults;
  //     newIdentity = activeTabResults[1];
  //   } else {
  //     setConseilState({ error: keyStore.error });
  //   }
  // };

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
            height: "140vh",
            padding: "15%",
            marginTop: "7vh",
            width: "65%",
          }}
        >
          <div className={classes.glass} style={{ padding: "7%" }}>
            <h2 className={classes.formTitle} style={{ marginTop: "-10px" }}>
              Add Liquidity
            </h2>
            <text className={classes.formIPTitle}>Owner</text>
            <TextField
              required
              InputProps={{ disableUnderline: true }}
              id='standard-required'
              //label='Required'
              defaultValue=''
              className={classes.formControl}
              style={{ marginTop: "-1px", marginBottom: "5%" }}
            />

            <text className={classes.formIPTitle}>Deposit</text>
            <TextField
              fullWidth
              disableUnderline={true}
              id='standard-number'
              //label='Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              //InputProps={{ disableUnderline: true }}
              className={classes.formControl}
              style={{ marginTop: "-1px", marginBottom: "5%" }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <img src={tokenLogo} height='19' alt='' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <text className={classes.formIPTitle}>Deposit</text>
            <TextField
              fullWidth
              disableUnderline={true}
              id='standard-number'
              //label='Number'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <img src={xtzLogo} height='19' alt='' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              //InputProps={{ disableUnderline: true }}
              className={classes.formControl}
              style={{ marginTop: "-1px", marginBottom: "5%" }}
            />
            <text className={classes.formIPTitle}>LQT to mint</text>
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
              className={classes.formControl}
              style={{ marginTop: "-1px", marginBottom: "5%" }}
            />

            <text className={classes.formIPTitle}>Deadline</text>

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
              className={classes.formControl}
              style={{ marginTop: "-1px", marginBottom: "5%" }}
            />
            <button
              type='submit'
              id='swap-btn'
              className='btn btn-primary btn-block btn-lg'
              style={{ width: "85%", marginTop: "10%", marginLeft: "7.5%" }}
            >
              SWAP!
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
