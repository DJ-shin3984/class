import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/type";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // 1. 새로운 컴포넌트 등장시에도 글 유지되는지?
  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    router.push("/section22/22-01-fetch-policy-moved");
  };

  const myStyles = {
    margin: "10px",
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>create new component</button>
      {isOpen && <FetchPolicyExample />}
      *****************************************************
      <button onClick={onClickMove}> move page</button>
    </div>
  );
}
