import { ChangeEvent, MouseEvent } from "react";

export interface IProductWriteUIProps {
  onClickSubmit : (e: MouseEvent<HTMLButtonElement>) => void
  onChangeSeller : (e: ChangeEvent<HTMLInputElement>) => void
  onChangeName : (e: ChangeEvent<HTMLInputElement>) => void
  onChangeDetail : (e: ChangeEvent<HTMLInputElement>) => void
  onChangePrice : (e: ChangeEvent<HTMLInputElement>) => void
  isActive : boolean
}