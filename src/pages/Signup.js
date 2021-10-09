import classes from "./Signup.module.css";
import SignupForm from "../components/SignupForm";
import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    document.title = "Sign up";
  });

  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default Signup;
