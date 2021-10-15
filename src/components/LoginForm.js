import { useRef, useState } from "react";
import { Redirect, useHistory } from "react-router";
import LabeledInput from "./LabeledInput";
import classes from "./LoginForm.module.css";

function LoginForm() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const [Result, SetResult] = useState();
  const API_Link = "https://fescape-backend.herokuapp.com/login";

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
    fetch(API_Link, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization:
          "Basic " +
          Buffer.from(userData.username + ":" + userData.password).toString(
            "base64"
          ),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status == 401) {
          SetResult("login unsuccessfully: username or password is incorrect");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.token !== undefined) {
          localStorage.setItem("user", data.token);
          history.replace("/");
        }
      });
    // if (data.result === "true") {
    //   localStorage.setItem("user", data.firstname);
    //   history.replace("/");
    // }
  }

  function signup_handler() {
    history.push("/signup");
  }

  return (
    <form className={classes.background} onSubmit={login_handler}>
      <h2 className={classes.login}>Login</h2>
      <div className={classes.inputfield}>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="Username :"
            type="text"
            id="username"
            required={true}
            refer={usernameInputRef}
          />
        </div>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="Password :"
            type="password"
            id="password"
            required={true}
            refer={passwordInputRef}
          />
        </div>
        <div className={classes.buttonfield}>
          <button
            type="button"
            onClick={signup_handler}
            className={classes.button}
          >
            Sign up
          </button>
          <button type="submit" className={classes.button}>
            Login
          </button>
        </div>
        <p className={classes.result}>{Result}</p>
      </div>
    </form>
  );
}

export default LoginForm;
