import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.queries";
import Swal from "sweetalert2";

export default function ProductWrite() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const onClickSubmit = async () => {
    if (isActive) {
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: result.data.createProduct.message,
          showConfirmButton: false,
          timer: 2000,
        });
        let itemIdx = result.data.createProduct._id;
        router.push(`/06-01-container-presenter/${itemIdx}`);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
          footer: '<a href="#seller">Why do I have this issue?</a>',
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "등록 실패",
        text: "입력란 모두 입력 해주세요.",
        footer: '<a href="#seller">Why do I have this issue?</a>',
      });
    }
  };

  const onChangeSeller = (e: ChangeEvent<HTMLInputElement>) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    // const inputSeller = document.querySelector("#seller").value ;
    // const inputPName = document.querySelector("#pName").value;
    // const inputPDetail = document.querySelector("#pDetail").value;
    // const inputPrice = document.querySelector("#price").value;
    // if (inputSeller && inputPName && inputPDetail && inputPrice) {

    // const inputSeller = seller
    // const inputPName = name
    // const inputPDetail = detail
    // const inputPrice = price

    if (seller && name && detail && price) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <ProductWriteUI
      onClickSubmit={onClickSubmit}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      isActive={isActive}
    />
  );
}
