import { makeStyles } from "@material-ui/core";
import React, { Component, useState } from "react";
import { useWallet } from "../../contexts/WalletProvider";
import tokenLogo from "../../ctez.svg";
import xtzLogo from "../../tezos-xtz-logo.png";

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

export default function SellForm() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     output: "0",
  //   };
  // }

  const classes = useStyles();
  const [output, setOutput] = useState(0);
  const [CTEZAmount, setCTEZAmount] = useState(0);
  const wallet = useWallet();

  // render() {
  return (
    <form
      className='mb-3'
      onSubmit={(event) => {
        event.preventDefault();
        // let xtzAmount;
        // xtzAmount = this.input.value.toString();
        // xtzAmount = 0;
        // this.props.sellTokens(xtzAmount);
        setCTEZAmount(event.target.value);
      }}
    >
      <div>
        <label className='float-left' style={{ color: "#fff" }}>
          <b>Input</b>
        </label>
        <span
          className='float-right'
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          Balance : {wallet.balance}
          {/* TODO add balance fetch */}
        </span>
      </div>
      <div className='input-group mb-4'>
        <input
          type='text'
          onChange={(event) => {
            // const tokenAmount = this.input.value.toString();
            // this.setState({
            //   output: tokenAmount / 100,
            // });
            setOutput(event.target.value / 100);
          }}
          // ref={(input) => {
          //   this.input = input;
          // }}
          className='form-control form-control-lg'
          placeholder='0'
          required
        />
        <div className='input-group-append'>
          <div className='input-group-text'>
            <img src={tokenLogo} height='32' alt='' />
            &nbsp; CTEZ
          </div>
        </div>
      </div>
      <div>
        <label className='float-left' style={{ color: "#fff" }}>
          <b>Output</b>
        </label>
        <span
          className='float-right'
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          Balance:
          {/* TODO add balance fetch */}
        </span>
      </div>
      <div className='input-group mb-2'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='0'
          value={output}
          disabled
        />
        <div className='input-group-append'>
          <div className='input-group-text'>
            <img src={xtzLogo} height='32' alt='' />
            &nbsp;&nbsp;&nbsp; XTZ
          </div>
        </div>
      </div>
      <div className='mb-5' style={{ color: "#fff" }}>
        <span className='float-left'>Exchange Rate</span>
        <span className='float-right'>100 CTEZ = 1 XTZ</span>
      </div>
      <button
        type='submit'
        id='swap-btn'
        className='btn btn-primary btn-block btn-lg'
      >
        SWAP!
      </button>
    </form>
  );
}

//export default SellForm;
