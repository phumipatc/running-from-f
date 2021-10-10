import classes from "./Login.module.css";

import LoginForm from "../components/LoginForm";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Login";
    localStorage.removeItem("user");
  }, []);

  return (
    <div>
      <p className={classes.topic}>รวมโจทย์หนี F</p>
      <div className={classes.form}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
