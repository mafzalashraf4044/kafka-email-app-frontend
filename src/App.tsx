import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Home, About } from '@pages';
import { Header } from '@components';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="w-screen">
        <Header />
        <ToastContainer />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
