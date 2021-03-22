import React,{useState} from 'react'
import { ThemeProvider } from "@material-ui/styles";
import Header2 from "../Header/Header2";
import theme from "../../Theme";
import Paper from '@material-ui/core/Paper';
import ExchgForm from './ExchgForm'
import { makeStyles } from "@material-ui/core/styles";
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
  
function Swap() {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div id="main">
            <ThemeProvider theme={theme}>
                <Header2
                    value={value}
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            <Paper elevation={3} >
                <ExchgForm/>
            </Paper>
            </ThemeProvider>
        </div>
    )
}

export default Swap;
