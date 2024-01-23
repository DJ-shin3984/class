import * as sty from "./ProductWrite.styles";
import { IProductWriteUIProps,  } from "./ProductWriteVo";


export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      판매자:{" "}
      <sty.RedInput
        type="text"
        id="seller"
        onChange={props.onChangeSeller}
        required
      />
      <br />
      제품명:{" "}
      <sty.RedInput
        type="text"
        id="pName"
        onChange={props.onChangeName}
        required
      />
      <br />
      제품설명:{" "}
      <sty.RedInput
        type="text"
        id="pDetail"
        onChange={props.onChangeDetail}
        required
      />
      <br />
      가격:{" "}
      <sty.RedInput
        type="text"
        id="price"
        onChange={props.onChangePrice}
        required
      />
      <br />
      <sty.BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        제품등록
      </sty.BlueButton>
    </>
  );
}
