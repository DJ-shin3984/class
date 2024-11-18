import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/type";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

const MY_GQL_SET = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
    }
  }
`;

export default function JestUnitTestMocking(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [myFunction] = useMutation(MY_GQL_SET)
  const router = useRouter()

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: {
        // variables 이게 $역할 해줌
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log(`result: ${result}`)
    const boardId = result.data.createBoard._id
    void router.push(`/boards/${boardId}`)
  };
  const onChangeWriter = (e : ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e : ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e : ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  return (
    <div>
      작성자: <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용: <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-button" onClick={onClickSubmit}>CALL GRAPHQL-API (sync)</button>
    </div>
  );
}
