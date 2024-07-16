import { useQuery, gql, useMutation } from "@apollo/client";
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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!){
    deleteBoard(boardId: $boardId)
  }
`;

const MY_GQL_SET = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARDS);
  
  const [myFunction] = useMutation(MY_GQL_SET)
  const onClickSubmit = (): void => {
    void myFunction({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: '1234',
          title: "테스트 하드코딩",
          contents: "내용이랄게..."
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, {data}){
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]
            }
          }
        })
      }
    })
  }

  const [deleteBoard] = useMutation(DELETE_BOARD)

  interface IPrev {
    __ref: string
  }

  const onClickDelete= (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS}]
      update(cache, {data}){
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], {readField}) => {
              const deletedId = data.deleteBoard // 삭제완료된 ID
              const filteredPrev = prev.filter((el) => readField("_id", el) !== deletedId)
              return [...filteredPrev]
            }
          }
        })
      }
    })
  }

  const myStyles = {
    margin: "10px",
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
