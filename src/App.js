import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UseWalletProvider } from "./contexts/WalletProvider";
import "./App.css";
import Swap from "./components/ExchangeForm";
import CreateAnOven from "./pages/CreateAnOven";
// import UserOvens from "./components/Ovens/UserOvens"
function App() {
  return (
    <div className='App'>
      <UseWalletProvider>
      <Router>
        <Route exact path='/' component={Swap} />
        <Route exact path='/create' component={CreateAnOven} />
        {/* <Route exact path='/my-ovens' component={userOvens} /> */}
      </Router>
      </UseWalletProvider>
    </div>
  );
}

export default App;
