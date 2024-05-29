import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/type";

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

export default function FetchPolicyExample(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { fetchPolicy: "network-only" });

  const myStyles = {
    margin: "10px",
  }; 

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
        </div>
      ))}
    </div>
  );
}
