import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/type";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const [clickIndex, setClickIndex] = useState(-1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const myStyles = {
    margin: "10px",
  };

  const onclickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setClickIndex(Number(event.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== clickIndex ? (
          <div key={el._id}>
            <span style={myStyles}> {el.title}</span>
            <span style={myStyles}> {el.writer}</span>
            <button id={String(index)} onClick={onclickEdit}>
              수정
            </button>
          </div>
        ) : (
          <input type="text" key={el._id}></input>
        ),
      )}
    </div>
  );
}
