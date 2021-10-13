import { useEffect, useState } from "react";
import classes from "./SubjectList.module.css";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
// import data from "./Mock_Data.json";
import { useHistory } from "react-router";

function SubjectList() {
  const [IsLoading, SetIsLoading] = useState(true);
  const [SubjectList, SetSubjectList] = useState();
  const [SearchTerm, SetSearchTerm] = useState("");
  const history = useHistory();
  const user = localStorage.getItem("user");
  const API_Link = "https://fescape-backend.herokuapp.com/tag/all";

  useEffect(() => {
    document.title = "Subjects";
    // console.log(data);
    if (user === null) history.replace("login");
    // SetIsLoading(false);
    // SetSubjectList(data);
    fetch(API_Link, {
      headers: { "x-access-tokens": localStorage.getItem("user") },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const title = Object.entries(data).map(([key, val]) => {
          return { SubjectName: val, SubjectID: key };
        });
        console.log(title);
        SetSubjectList(title);
        SetIsLoading(false);
        // console.log(SubjectList);
      });
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
        searchable={true}
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
          return <Card key={key} id={val.SubjectID} title={val.SubjectName} />;
        })}
      </div>
    </div>
  );
}

export default SubjectList;
