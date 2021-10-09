import { useRef } from "react";
import { Redirect, useHistory } from "react-router";
import LabeledInput from "./LabeledInput";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const API_Link = "";

  function login_handler(event) {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    // Send API
    console.log(userData);
    // fetch(API_Link, {
    //   body: JSON.stringify(userData),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     localStorage.setItem("user", userData.username);
    //     history.replace("/");
    //   });
    localStorage.setItem("user", userData.username);
  }

  function signup_handler() {
    history.push("/signup");
  }

  return (
    <form className={classes.background}>
      <h2 className={classes.login}>Login</h2>
      <div>
        <LabeledInput
          label="Username :"
          type="text"
          id="username"
          required={true}
          refer={usernameInputRef}
        />
        <LabeledInput
          label="Password :"
          type="password"
          id="password"
          required={true}
          refer={passwordInputRef}
        />
      </div>
      <div>
        <button onClick={signup_handler}>Sign up</button>
        <button onClick={login_handler}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
