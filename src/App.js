import "./App.css";
import React, { Component } from "react";
import Winner from "./component/Winner";
import Members from "./component/Members";
import {db, provider, auth} from "./firebase";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";



class App extends Component {
  state = {
    login: false ,
    members: [],
    winners: [],
    name: "none"
  };
  signin = () =>{
    auth
  .signInWithPopup(provider)
  .then((result) => {

    this.setState({login: true, name: result.user.displayName })

    // ...
  }).catch((error) => {
    console.log(error)
  });
  }
  componentDidMount() {
    auth.onAuthStateChanged((user)=> {
      if (user) {
        this.setState({login: true, name: user.displayName });
        db.ref()
        .child("members").set([ ...this.state.winners, {
          name: "ragu",
          image: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg?resize=750,500",

        }]);
      } else {
        console.log("error");
      }
    });
    db.ref()
      .child("winners")
      .on("value", (e) => {
        this.setState({ winners: e.val() });
        console.log("ffs", e.val())
      });
    db
      .ref()
      .child("members")
      .on("value", (snap) => {
        this.setState({ members: snap.val() });
      });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.login ? <Router>
          <nav
            className="navbar navbar-light mb-2 p-3 shadow-sm"
            style={{ position: "sticky", backgroundColor: "white", top: 0 }}
          >
            <span style={{ fontSize: 30 }}>LeaderBoard Welcome {this.state.name}</span>
          </nav>
          <nav className="navigationbar shadow-sm">
            <NavLink
              className="nav-item"
              to="/"
              exact
              activeStyle={{
                fontWeight: "bold",
                border: 2,
                borderColor: "red",
              }}
            >
              TODAY
            </NavLink>
            <NavLink
              className="nav-item"
              exact
              to="/thisweek"
              activeStyle={{
                fontWeight: "bold",
                borderWidth: 2,
              }}
            >
              THIS WEEK
            </NavLink>
            <NavLink
              className="nav-item"
              exact
              to="/thismonth"
              activeStyle={{
                fontWeight: "bold",
                borderWidth: 2,
              }}
            >
              THIS MONTH
            </NavLink>
          </nav>

          <Route path="/" exact>
            <div className="main">
              <div className="content">
                <Winner winners={this.state.winners} />
              </div>
              <Members members={this.state.members} />
            </div>
          </Route>

          <Route path="/thisweek">
            <div style={{ textAlign: "center", padding: 100 }}>
              <p>loading.....</p>
            </div>
          </Route>

          <Route path="/thismonth">
            <div style={{ textAlign: "center", padding: 100 }}>
              <p>{this.state.name}</p>
            </div>
          </Route>
        </Router>
        :
        <div>hi
        <button onClick={this.signin}>Login</button>
        </div>

        }
      </React.Fragment>
    );
  }
}

export default App;
