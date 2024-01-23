import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.pageIdx),
    },
  });

  console.log(data);

  return (
    <>
      <div>page이동 완료</div>
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중"}</div>
      {/* 3항연산자  */}
      <div>제목: {data && data.fetchBoard.title}</div>
      {/* 이건 정석 (조건부 렌더링)*/}
      <div>내용: {data?.fetchBoard.contents}</div>
      {/* ↑ 위에꺼 축약 ver (옵셔널 체이닝) */}
    </>
  );
}
