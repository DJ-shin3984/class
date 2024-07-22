import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

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
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId: router.query.index},
  });

  return (
    <>
      <div style={{color: 'red'}}>작성자: {data?.fetchBoard?.writer}</div>
      <div style={{color: 'green'}}>제목: {data?.fetchBoard?.title}</div>
      {/* {typeof window !== "undefined" && ( */}
      {typeof window !== "undefined" ? (
        <div style={{color: 'blue'}} dangerouslySetInnerHTML={{
          // __html: data?.fetchBoard?.contents
          __html: DOMPurify.sanitize(data?.fetchBoard?.contents)
        }}/>
      ) : <div style={{color: 'blue'}}/>}
      <div style={{color: 'orange'}}>주소:성동구</div>
    </>
  );
}
