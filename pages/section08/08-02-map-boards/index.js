import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query{
    fetchBoards {
        number
        writer
        title
        contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data?.fetchBoards);

  const myStles = {
    margin: "10px"
  }
  return (
    <>
        <div>게시글 이동 완료</div>
        <div>
            {data?.fetchBoards.map(el => 
                <div>   
                    <span style={{margin: "10px"}}> 게시글 번호: {el.number}</span>
                    <span style={myStles}> 게시글 제목: {el.title}</span>
                    <span style={myStles}> 글쓴이: {el.writer}</span>
                </div>
            )}
        </div>
        {/* <div>작성자: {data && data.fetchBoard.writer}</div>
        <div>제목: {data && data.fetchBoard.title}</div>
        <div>내용: {data ? data.fetchBoard.contents : "로딩중"}</div> */}
    </>
  );
}
