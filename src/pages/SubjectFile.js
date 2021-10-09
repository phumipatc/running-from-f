import { useEffect, useState } from "react";
import { Redirect, history, useHistory } from "react-router";
import Loading from "../components/Loading";

function SubjectFile(props) {
  const [FileList, SetFileList] = useState();
  const [IsLoading, SetIsLoading] = useState(true);
  const history = useHistory();
  const API_Link = "";

  useEffect(() => {
    document.title = props.id;
    // fetch(API_Link,{
    //   body=JSON.stringify(props.id)
    // }).then((response)=>{
    //   return response.json();
    // }).then((data)=>{
    //   SetIsLoading(false);
    //   SetFileList(data);
    // });
  }, []);

  if (props.id === undefined) {
    history.replace("/");
  }

  if (IsLoading) {
    return <Loading />;
  }

  return <div></div>;
}

export default SubjectFile;
