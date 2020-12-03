import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Exp from "./bodies/exp";
import Impr from "./bodies/impr";
import Syr from "./bodies/syr";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="btn">
          <button>
            <Link to="/expressionism" className="lk">
              Экспрессионизм
            </Link>
          </button>
          <button>
            <Link to="/syrrealism" className="lk">
              Сюрреализм
            </Link>
          </button>
          <button>
            <Link to="/impressionism" className="lk">
              Импрессионизм
            </Link>
          </button>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/impressionism">
            <Impr />
          </Route>
          <Route path="/syrrealism">
            <Syr />
          </Route>
          <Route path="/expressionism">
            <Exp />
          </Route>
        </Switch>
        <div className="btn">
          <a
            style={{
              fontFamily: ' "Caveat", cursive',
              fontSize: "60px",
              color: "rgba(238, 234, 243, 1)"
            }}
          >
            Выполнил: Шушпанов Алексей
          </a>

          <a href="#" className="btn2">
            ^
          </a>
        </div>
      </div>
    </Router>
  );
}
