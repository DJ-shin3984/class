import { gql, useMutation } from "@apollo/client";
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

  const [inputs, setInputs] = useState({
    seller: "",
    name: "",
    detail: "",
    price: "",
  });

  const onClickSubmit = async () => {
    /*
    const result = await createBoard({
      variables: {
        // variables 이게 $역할 해줌
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    */
    /*  const result = await createProduct({
      variables: {
        seller: inputs.seller,
        createProductInput: {
          name: inputs.name,
          detail: inputs.detail,
          price: inputs.price,
        },
      },
    }); */
    const result = await createProduct({
      variables: {
        seller: inputs.seller,
        createProductInput: {
          ...inputs,
        },
      },
    });
    console.log(result);
  };
  const onChangeInputs = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      판매자: <input type="text" id="seller" onChange={onChangeInputs} />
      <br />
      제품명: <input type="text" id="name" onChange={onChangeInputs} />
      <br />
      설명: <input type="text" id="detail" onChange={onChangeInputs} />
      <br />
      가격: <input type="text" id="price" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickSubmit}>CALL GRAPHQL-API (sync)</button>
    </>
  );
}
