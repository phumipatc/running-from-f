import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function SubjectList() {
  const [IsLoading, SetIsLoading] = useState(true);
  const [SubjectList, SetSubjectList] = useState();
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

  return <div></div>;
}

export default SubjectList;
