import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Swap from './components/Swap'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Swap}/>
      </Router>
    </div>
    );
  }
  
  export default App;
  