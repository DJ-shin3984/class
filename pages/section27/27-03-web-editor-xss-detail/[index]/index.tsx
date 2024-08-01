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
      <div>page이동 완료</div>

      {/* <div>페이지 번호: {data ? data.fetchProduct._id : "로딩중"}</div> 3항연산자 방식으로 보여줌 */}
      <div>페이지 번호: {data ? data.fetchBoard?._id : "로딩중"}</div>
      {/* <div>판매자: {data && data.fetchProduct.seller}</div>  데이터가 있으면 그려주고 없으면 안그린다. = 조건부 렌더링*/}
      {/* <div>판매자: {data?.fetchProduct.seller}</div>  위와 동일하다 표기 방식명은 옵셔널 체이닝 이라 부름 (optional-chaining)*/}
      {/* <div>페이지 번호: {data ? data.fetchProduct?._id : "로딩중"}</div>  fetchProduct 뒤에 ? 가 붙어있다. 이 경우는 해당 내용이 없을경우 (게시글 삭제)*/}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div> */}
      {typeof window !== "undefined" && (
        <div dangerouslySetInnerHTML={{
          // __html: data?.fetchBoard?.contents
          __html: DOMPurify.sanitize(data?.fetchBoard?.contents)
        }}/>
      )}
    </>
  );
}
