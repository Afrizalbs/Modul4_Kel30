import "./App.css";
import { React } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Counter from "./LearnUseState/";
import Effect from "./LearnUseEffect/";
import Context from "./LearnUseContext/";
import Reducer from "./LearnUseReducer/";
import Memo from "./LearnUseMemo/";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#282c34",
                }}
                to="/"
              >
                Use State
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#282c34" }}
                className="link"
                to="/effect"
              >
                Use Effect
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#282c34" }}
                className="link"
                to="/context"
              >
                Use Context
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#282c34" }}
                className="link"
                to="/reducer"
              >
                Use Reducer
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#282c34" }}
                className="link"
                to="/memo"
              >
                Use Memo
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/effect" exact component={Effect} />
          <Route path="/context" exact component={Context} />
          <Route path="/reducer" exact component={Reducer} />
          <Route path="/memo" exact component={Memo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
