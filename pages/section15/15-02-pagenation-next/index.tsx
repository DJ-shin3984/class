import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
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
  const [startPage, setStartPage] = useState(1);

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

  const onClickPrevPage = (): void => {
    setStartPage((startPage) => startPage - 10);
    void refetch({ page: startPage });
  };

  const onClickNextPage = (): void => {
    setStartPage((startPage) => startPage + 10);
    void refetch({ page: startPage });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
        </div>
      ))}

      {startPage !== 1 && <span onClick={onClickPrevPage}>이전페이지</span>}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
