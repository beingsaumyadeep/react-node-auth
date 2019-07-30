import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />      
    </Router>
  );
}

export default App;
