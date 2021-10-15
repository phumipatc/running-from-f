import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.background}>
      <p className={classes.loading}>Loading</p>
    </div>
  );
}

export default Loading;
