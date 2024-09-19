import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

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

export default function DataPrefetchMovedPage(): JSX.Element {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD,{
    variables: { boardId: router.query.qqq}
  })
  return(
    <>
      <div>
        <div>작성자:{data?.fetchBoard?.writer}</div>
        <div>제목:{data?.fetchBoard?.title}</div>
        <div>내용:{data?.fetchBoard?.contents}</div>
      </div>
    </>
  )
}