import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
/*
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`
*/
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
  //   const [createBoard] = useMutation(CREATE_BOARD)
  /*
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  */
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

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
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });
    console.log(result);
    // console.log("!@# : " + result);
  };
  /*
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  */
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
      {/* 
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
    */}
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      제품명: <input type="text" onChange={onChangeName} />
      <br />
      설명: <input type="text" onChange={onChangeDetail} />
      <br />
      가격: <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>CALL GRAPHQL-API (sync)</button>
    </>
  );
}
