import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite() {
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
            name,
            detail,
            price: Number(price),
          },
        },
      });
      alert(result.data.createProduct.message);
      let itemIdx = result.data.createProduct._id;
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
    <ProductWriteUI
      onClickSubmit={onClickSubmit}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
    />
  );
}
