import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import About from './components/About'
function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />      
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
