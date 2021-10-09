import { useEffect, useState } from "react";
import { Redirect, history, useHistory, location } from "react-router";
import Loading from "../components/Loading";

function SubjectFile(props) {
  const [FileList, SetFileList] = useState();
  const [IsLoading, SetIsLoading] = useState(true);
  const history = useHistory();
  const API_Link = "";

  useEffect(() => {
    document.title = props.location.id;
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
    return <Loading />;
  }

  return <div></div>;
}

export default SubjectFile;
