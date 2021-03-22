import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Swap from "./components/ExchangeForm";
import CreateAnOven from "./pages/CreateAnOven";
// import UserOvens from "./components/Ovens/UserOvens"
function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Swap} />
        <Route exact path='/create' component={CreateAnOven} />
        {/* <Route exact path='/my-ovens' component={userOvens} /> */}
      </Router>
    </div>
  );
}

export default App;
