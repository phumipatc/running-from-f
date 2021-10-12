import { useEffect, useState } from "react";
import classes from "./SubjectList.module.css";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import data from "./Mock_Data.json";

function SubjectList() {
  const [IsLoading, SetIsLoading] = useState(true);
  const [SubjectList, SetSubjectList] = useState();
  const [SearchTerm, SetSearchTerm] = useState("");
  const API_Link = "";

  useEffect(() => {
    document.title = "Subjects";
    SetIsLoading(false);
    SetSubjectList(data);
    // fetch(API_Link)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     SetIsLoading(false);
    //     SetSubjectList(data);
    //   });
  }, []);

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
        {SubjectList.filter((val) => {
          if (
            SearchTerm === "" ||
            val.SubjectName.toLowerCase().includes(SearchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return <Card id={val.SubjectID} title={val.SubjectName} />;
        })}
      </div>
    </div>
  );
}

export default SubjectList;
