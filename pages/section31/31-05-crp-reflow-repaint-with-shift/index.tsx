import { useQuery, gql } from "@apollo/client";
import { MouseEvent, MouseEventHandler } from "react";
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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const myStyles = {
    margin: "10px",
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id} style={{height: "30px"}}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
