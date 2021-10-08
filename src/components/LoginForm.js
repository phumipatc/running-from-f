import { useRef } from "react";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

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
    fetch("API link", {
      body: JSON.stringify(userData),
    });
  }

  function signup_handler() {}

  return (
    <form className={classes.background}>
      <h2 className={classes.login}>Login</h2>
      <p>Username :</p>
      <input type="text" required id="username" ref={usernameInputRef} />
      <p>Password :</p>
      <input type="password" required id="password" ref={passwordInputRef} />
      <div>
        <button onClick={signup_handler}>Sign up</button>
        <button onClick={login_handler}>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
