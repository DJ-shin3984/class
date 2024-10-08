import { useQuery, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler } from "react";
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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const client = useApolloClient()

  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
      query:FETCH_BOARD,
      variables: {boardId}
    })
  }

  const router = useRouter()

  const onClickMove = (boardId: string) => () => {
    void router.push(`/section31/31-10-data-prefetch-moved/${boardId}`)
  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{margin: "10px"}} onMouseOver={prefetchBoard(el._id)} onClick={onClickMove(el._id)} > {el.title}</span>
          <span style={{margin: "10px"}}> {el.writer}</span>
        </div>
      ))}
    </div>
  );
}
