import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10);

  const myStyles = {
    margin: "10px",
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    setStartPage(startPage - 10);
    console.log(`PrevPage / ${startPage - 10}`);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    console.log(
      `NextPage / ${startPage + 10} / ${lastPage % (startPage + 10)}`,
    );
    void refetch({ page: startPage + 10 });
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
      <br />
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              style={myStyles}
            >
              {index + startPage}
            </span>
          ),
      )}
      <br />
      {lastPage % startPage > 9 && (
        <span onClick={onClickNextPage}>다음페이지</span>
      )}
    </div>
  );
}
