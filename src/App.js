import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UseWalletProvider } from "./contexts/WalletProvider";
import "./App.css";
import Swap from "./components/ExchangeForm";
//import Swap from "./components/Forms/E";
import CreateAnOven from "./pages/CreateAnOven";
import AddLiquidity from "./pages/AddLiquidity/AddLiquidity";
import RemoveLiquidity from "./pages/RemoveLiquidity/RemoveLiquidity";
import TezToCtez from "./pages/TezToCtez/TezToCtez";
import CtezToTez from "./pages/CtezToTez/CtezToTez";
// import UserOvens from "./components/Ovens/UserOvens"
function App() {
  return (
    <div className='App'>
      <UseWalletProvider>
      <Router>
        <Route exact path='/' component={Swap} />
        <Route exact path='/exchange' component={Swap} />
        <Route exact path='/create' component={CreateAnOven} />
        <Route exact path='/add-liquidity' component={AddLiquidity}></Route>
        <Route
          exact
          path='/remove-liquidity'
          component={RemoveLiquidity}
        ></Route>
        <Route exact path='/cash-to-token' component={TezToCtez} />
        <Route exact path='/token-to-cash' component={CtezToTez} />
        {/* <Route exact path='/my-ovens' component={userOvens} /> */}
      </Router>
      </UseWalletProvider>
    </div>
  );
}

export default App;
