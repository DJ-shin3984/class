import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            // name : value 愿�怨꾩뿉�꽌 �룞�씪�븳 name 紐낃낵 value 紐낆쓣 �궗�슜�븷寃쎌슦 �븘�옒泥섎읆 �깮�왂 媛��뒫 : shorthand-property �씪怨� 遺�瑜몃떎.
            // name: name,
            // detail: detail,
            // price: Number(price),
            name,
            detail,
            price: Number(price),
          },
        },
      });
      // console.log(result.data.createProduct._id);
      alert(result.data.createProduct.message);
      let itemIdx = result.data.createProduct._id;
      // router.push(`/05-10-dynamic-routed-mutation/${itemIdx}`);
      router.push(`/06-01-container-presenter/${itemIdx}`);
    } catch (error) {
      alert(error);
    }
  };
  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  return (
    <>
      �뙋留ㅼ옄: <input type="text" onChange={onChangeSeller} />
      <br />
      �젣�뭹紐�: <input type="text" onChange={onChangeName} />
      <br />
      �젣�뭹�꽕紐�: <input type="text" onChange={onChangeDetail} />
      <br />
      媛�寃�: <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>�젣�뭹�벑濡�</button>
    </>
  );
}
