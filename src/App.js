import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={UserList} />
      <Route
        exact
        path="/users/:id"
        render={(props) => <Profile {...props} />}
      />
      
    </div>
  );
}

export default App;
