import classes from "./SignupForm.module.css";
import LabeledInput from "./LabeledInput";
import { useRef } from "react";
import { useHistory } from "react-router";

function SignupForm() {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const API_Link = "https://fescape-backend.herokuapp.com/register";
  function signup_handler(event) {
    event.preventDefault();
    const enteredfirstname = firstnameInputRef.current.value;
    const enteredlastname = lastnameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const signupData = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(JSON.stringify(signupData));
    fetch(API_Link, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message === "createUser successfully") {
          history.replace("/login");
        }
      });
  }
  return (
    <form className={classes.background}>
      <div className={classes.asignup}>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="First name :"
            type="text"
            id="Firstname"
            required={true}
            refer={firstnameInputRef}
          />
        </div>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="Last name :"
            type="text"
            id="Lastname"
            required={true}
            refer={lastnameInputRef}
          />
        </div>
      </div>
      <div className={classes.asignup}>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="Username :"
            type="text"
            id="Username"
            required={true}
            refer={usernameInputRef}
          />
        </div>
        <div className={classes.LabeledInput}>
          <LabeledInput
            label="Password :"
            type="text"
            id="Password"
            required={true}
            refer={passwordInputRef}
          />
        </div>
      </div>
      <div className={classes.buttonfield}>
        <button className={classes.button} onClick={signup_handler}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
