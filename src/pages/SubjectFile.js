import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Loading from "../components/Loading";
import classes from "./SubjectFile.module.css";
// import data from "./Mock_Math_Data.json";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function SubjectFile(props) {
  const [FileList, SetFileList] = useState();
  const [IsLoading, SetIsLoading] = useState(true);
  const history = useHistory();
  const API_Link = "https://fescape-backend.herokuapp.com/search/pdf";

  useEffect(() => {
    document.title = props.location.title;
    const data = {
      tag_id: props.location.id,
    };
    // SetIsLoading(false);
    // SetFileList(data);
    // console.log(data);
    fetch(API_Link, {
      method: "POST",
      headers: {
        "x-access-tokens": localStorage.getItem("user"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        const files = Object.values(data).map((val) => {
          return { FileName: val.file_name, url: val.link };
        });
        SetFileList(files);
        console.log(files);
        SetIsLoading(false);
      });
  }, [props.location.id, props.location.title]);

  // console.log(props.location.id);
  if (props.location.id === undefined) {
    history.replace("/");
  }

  if (IsLoading) {
    return (
      <div className={classes.background}>
        <NavBar searchable={false} />
        <Loading />
      </div>
    );
  }

  return (
    <div className={classes.background}>
      <NavBar searchable={false} />
      <p className={classes.topic}>{props.location.title}</p>
      <div className={classes.cardfield}>
        <Card id={props.location.id} add={true} title="Add more document" />
        {FileList.map((val, key) => {
          return <Card key={key} url={val.url} title={val.FileName} />;
        })}
      </div>
    </div>
  );
}

export default SubjectFile;
