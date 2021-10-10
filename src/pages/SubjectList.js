import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function SubjectList() {
  const [IsLoading, SetIsLoading] = useState(true);
  const [SubjectList, SetSubjectList] = useState();
  const [SearchTerm, SetSearchTerm] = useState("");
  const API_Link = "";

  useEffect(() => {
    document.title = "Subjects";

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
    return <Loading />;
  }

  return (
    <div>
      <NavBar
        onSearchChange={(Data) => {
          SetSearchTerm(Data);
        }}
      />
      <div>
        {SubjectList.filter((val) => {
          if (
            SearchTerm === "" ||
            val.title.toLowerrCase().includes(SearchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return <Card title={val.title} />;
        })}
      </div>
    </div>
  );
}

export default SubjectList;
