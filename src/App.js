import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Swap from "./components/Swap";
import CreateAnOven from "./pages/CreateAnOven";
function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Swap} />
        <Route exact path='/create-an-oven' component={CreateAnOven} />
      </Router>
    </div>
  );
}

export default App;
