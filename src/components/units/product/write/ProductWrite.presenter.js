import * as sty from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      판매자: <sty.RedInput type="text" onChange={props.onChangeSeller} />
      <br />
      제품명: <sty.RedInput type="text" onChange={props.onChangeName} />
      <br />
      제품설명: <sty.RedInput type="text" onChange={props.onChangeDetail} />
      <br />
      가격: <sty.RedInput type="text" onChange={props.onChangePrice} />
      <br />
      <sty.BlueButton onClick={props.onClickSubmit}>제품등록</sty.BlueButton>
    </>
  );
}
