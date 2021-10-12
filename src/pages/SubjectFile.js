import { useEffect, useState } from "react";
import { Redirect, history, useHistory } from "react-router";
import Loading from "../components/Loading";
import classes from "./SubjectFile.module.css";
import data from "./Mock_Math_Data.json";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function SubjectFile(props) {
  const [FileList, SetFileList] = useState();
  const [IsLoading, SetIsLoading] = useState(true);
  const [SearchTerm, SetSearchTerm] = useState("");
  const history = useHistory();
  const API_Link = "";

  useEffect(() => {
    document.title = props.location.id;
    SetIsLoading(false);
    SetFileList(data);
    // fetch(API_Link,{
    //   body=JSON.stringify(props.id)
    // }).then((response)=>{
    //   return response.json();
    // }).then((data)=>{
    //   SetIsLoading(false);
    //   SetFileList(data);
    // });
  }, []);

  console.log(props.location.id);
  if (props.location.id === undefined) {
    history.replace("/");
  }

  if (IsLoading) {
    return (
      <div className={classes.background}>
        <NavBar />
        <Loading />
      </div>
    );
  }

  return (
    <div className={classes.background}>
      <NavBar
        onSearchChange={(Data) => {
          SetSearchTerm(Data);
        }}
      />
      <div className={classes.cardfield}>
        <Card id={props.location.id} add={true} title="Add more document" />
        {FileList.filter((val) => {
          if (
            SearchTerm === "" ||
            val.SubjectName.toLowerCase().includes(SearchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return <Card url={val.url} title={val.FileName} />;
        })}
      </div>
    </div>
  );
}

export default SubjectFile;
