import "./App.css";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/games/:id">
            <Games />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
