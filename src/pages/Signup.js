import classes from "./Signup.module.css";
import SignupForm from "../components/SignupForm";
import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    document.title = "Sign up";
  });

  return (
    <div className={classes.background}>
      <p className={classes.topic}>รวมโจทย์หนี F</p>
      <div className={classes.form}>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
