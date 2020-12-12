import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Chat from "./components/pages/Chat";
import Reserve from "./components/pages/Reserve";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/chat" component={Chat} />
      <Route path="/reserve" component={Reserve} />
    </div>
  </Router>
  );
}

export default App;
