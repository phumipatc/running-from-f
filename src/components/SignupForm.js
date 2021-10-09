import classes from "./SignupForm.module.css";
import LabeledInput from "./LabeledInput";
import { useRef } from "react";

function SignupForm() {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  function signup_handler(event) {
    event.preventDefault();
    const enteredfirstname = firstnameInputRef.current.value;
    const enteredlastname = lastnameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const signupData = {
      firstname: enteredfirstname,
      lastnaem: enteredlastname,
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(signupData);
  }
  return (
    <form>
      <div className={classes.asignup}>
        <LabeledInput
          label="First name :"
          type="text"
          id="Firstname"
          required={true}
          refer={firstnameInputRef}
        />
        <LabeledInput
          label="Last name :"
          type="text"
          id="Lastname"
          required={true}
          refer={lastnameInputRef}
        />
      </div>
      <div className={classes.asignup}>
        <LabeledInput
          label="Username :"
          type="text"
          id="Username"
          required={true}
          refer={usernameInputRef}
        />
        <LabeledInput
          label="Password :"
          type="text"
          id="Password"
          required={true}
          refer={passwordInputRef}
        />
      </div>
      <div>
        <button onClick={signup_handler}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
