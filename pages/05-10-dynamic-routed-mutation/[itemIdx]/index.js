import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
export default function StaticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.itemIdx,
    },
  });

  console.log(data);

  return (
    <>
      <div>page이동 완료</div>

      {/* <div>페이지 번호: {data ? data.fetchProduct._id : "로딩중"}</div> 3항연산자 방식으로 보여줌 */}
      <div>페이지 번호: {data ? data.fetchProduct?._id : "로딩중"}</div>
      {/* <div>판매자: {data && data.fetchProduct.seller}</div>  데이터가 있으면 그려주고 없으면 안그린다. = 조건부 렌더링*/}
      {/* <div>판매자: {data?.fetchProduct.seller}</div>  위와 동일하다 표기 방식명은 옵셔널 체이닝 이라 부름 (optional-chaining)*/}
      {/* <div>페이지 번호: {data ? data.fetchProduct?._id : "로딩중"}</div>  fetchProduct 뒤에 ? 가 붙어있다. 이 경우는 해당 내용이 없을경우 (게시글 삭제)*/}
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>상품설명: {data?.fetchProduct?.detail}</div>
      <div>가격: {data?.fetchProduct?.price}</div>
      <div>등록일시: {data?.fetchProduct?.createdAt}</div>
    </>
  );
}
