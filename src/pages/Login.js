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
      <p>รวมโจทย์หนี F</p>
      <LoginForm />
    </div>
  );
}

export default Login;
