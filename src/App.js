import "./App.css";
import { Route, Switch } from "react-router";
import SubjectList from "./pages/SubjectList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubjectFile from "./pages/SubjectFile";
import AddDocLink from "./pages/AddDocLink";
import AddDocFile from "./pages/AddDocFile";
import ShowFile from "./pages/ShowFile";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SubjectList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/files" component={SubjectFile} />
        <Route exact path="/add_link" component={AddDocLink} />
        <Route exact path="/add_file_name" component={AddDocFile} />
        <Route exact path="/showfile" component={ShowFile} />
      </Switch>
    </div>
  );
}

export default App;
