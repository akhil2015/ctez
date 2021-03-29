import { makeStyles } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
//import { useEffect } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";
import "./styles.css";

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
    background: "rgba(255, 255, 255, 0.0)",
    borderRadius: "10px",
    //backdropFilter: "blur(0.001px)",
    boxShadow: "0 25px 45px rgba(0,0,0, 0.0)",
    border: "1px solid rgba(255, 255, 255, 0.0)",
    borderRight: "1px solid rgba(255, 255, 255, 0.0)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.0)",
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

export default function Exchange() {
  const classes = useStyles();
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentForm: "buy",
  //   };
  // }
  const [currentForm, setcurrentForm] = useState("buy");
  const [content, setContent] = useState();
  //let content;

  // render() {
  //   let content;
  //   if (this.state.currentForm === "buy") {
  //     content = (
  //       <BuyForm
  //         xtzBalance={this.props.xtzBalance}
  //         tokenBalance={this.props.tokenBalance}
  //         buyTokens={this.props.buyTokens}
  //       />
  //     );
  //   } else {
  //     content = (
  //       <SellForm
  //         xtzBalance={this.props.xtzBalance}
  //         tokenBalance={this.props.tokenBalance}
  //         sellTokens={this.props.sellTokens}
  //       />
  //     );
  //   }
  useEffect(() => {
    //let content;
    if (currentForm === "buy") {
      setContent(
        <BuyForm
        // xtzBalance={this.props.xtzBalance}
        // tokenBalance={this.props.tokenBalance}
        // buyTokens={this.props.buyTokens}
        />
      );
      // content = (
      //   <BuyForm
      //   // xtzBalance={this.props.xtzBalance}
      //   // tokenBalance={this.props.tokenBalance}
      //   // buyTokens={this.props.buyTokens}
      //   />
      // );
    } else {
      setContent(
        <SellForm
        // xtzBalance={this.props.xtzBalance}
        // tokenBalance={this.props.tokenBalance}
        // sellTokens={this.props.sellTokens}
        />
      );
      // content = (

      // );
    }
  });

  return (
    <div id='content' className='mt-3 '>
      <div className='d-flex justify-content-between mb-3'>
        <button
          className='btn btn-light'
          onClick={(event) => {
            //this.setState({ currentForm: "buy" });
            setcurrentForm("buy");
          }}
        >
          Buy
        </button>
        <span className='text-muted'>&lt; &nbsp; &gt;</span>
        <button
          className='btn btn-light'
          onClick={(event) => {
            //this.setState({ currentForm: "sell" });
            setcurrentForm("sell");
          }}
        >
          Sell
        </button>
      </div>

      <div className={classes.glass}>
        <div className='card-body'>{content}</div>
      </div>
    </div>
  );
}

//export default Exchange;
