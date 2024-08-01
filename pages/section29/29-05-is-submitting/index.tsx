import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 게시글 등록버튼이라 가정한다.
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true)
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result)
    console.log(result.data.title)
    setIsSubmitting(false)
  };

  return (
    <>
      <button onClick={onClickSync} disabled={isSubmitting}>CALL REST-API(sync)</button>
    </>
  );
}
