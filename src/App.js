import "./App.css";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import ComingSoon from "./pages/comingsoon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/comingsoon" component={ComingSoon} exact />
      </Switch>
    </Router>
  );
}

export default App;
