import { gql, useMutation, useQuery } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/type";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!){
    likeBoard(boardId: $boardId)
  }
`

export default function OptimisticUIPage() {
  const {data} = useQuery<Pick<IQuery, "fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: "66eb8418a66ab700285a9fb8"}
  })

  const [likeBoard] = useMutation<Pick<IMutation,"likeBoard">,IMutationCreateBoardArgs>(LIKE_BOARD)

  const onClickLike = (): void => {
    likeBoard({
      variables:{
        boardId: "66eb8418a66ab700285a9fb8", // 특정 게시글 ID
      },
      optimisticResponse: { // 이번 실습의 핵심 optimistic 
        likeBoard: (data.fetchBoard.likeCount ?? 0) + 1
      },
      update: (cache, { data }) => {
        cache.writeQuery({ //writeQuery 는 없는것도 추가 가능 modify 는 기존의 값을 수정
          query: FETCH_BOARD,
          variables: {boardId: "66eb8418a66ab700285a9fb8"}, // 특정 게시글 ID
          data:{
            fetchBoard:{
              _id: "66eb8418a66ab700285a9fb8", // 특정 게시글 ID
              __typename: "Board",
              likeCount: data?.likeBoard // 좋아요 개수
            }
          }
        })
      }
    })
  }

  return(
    <>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount}
        <button onClick={onClickLike}>좋아요</button>
      </div>
    </>
  )
}