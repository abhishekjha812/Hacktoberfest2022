import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from "react";

import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailVeiw from "./components/post/DetailVeiw";
import CreateVeiw from "./components/post/CreateVeiw";
import UpdateVeiw from "./components/post/UpdateVeiw";
function App() {
  return (

    <Router>
      
      <Header />
      <Box style={{ marginTop: 65 }} >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailVeiw} />
          <Route exact path="/create" component={CreateVeiw} />
          <Route exact path="/update/:id" component={UpdateVeiw} />
        </Switch>

      </Box>
    </Router>

  );
}

export default App;
