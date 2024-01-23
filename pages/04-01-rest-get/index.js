import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTile] = useState("aaa");
  const onClickAsync = (e) => {
    const result = axios.get("https://koreanjson.com/posts/1");
    // console.log(`!@# async result: ${result}`);
    console.log(result);
  };

  const onClickSync = async (e) => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    // console.log(`!@# sync result: ${result}`);
    console.log(result);
    setTile(result.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>CALL REST-API(async)</button>
      <button onClick={onClickSync}>CALL REST-API(sync)</button>
      <div>{title}</div>
    </>
  );
}
