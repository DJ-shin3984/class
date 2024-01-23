import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Presenter from "../../06-01-container-presenter/presenter";
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
export default function Container() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.itemIdx,
    },
  });

  console.log(data);

  return <Presenter data={data} />;
}
