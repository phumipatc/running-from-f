import "./App.css";
import { Route, Switch } from "react-router";
import SubjectList from "./pages/SubjectList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubjectFile from "./pages/SubjectFile";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SubjectList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/files" component={SubjectFile} />
      </Switch>
    </div>
  );
}

export default App;
