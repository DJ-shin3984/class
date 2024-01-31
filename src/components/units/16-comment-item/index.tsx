import { MouseEvent, useState } from "react";

const myStyles = {
  margin: "10px",
};

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      {!isEdit ? (
        <div>
          <span style={myStyles}> {props.el.title}</span>
          <span style={myStyles}> {props.el.writer}</span>
          <button onClick={onClickEdit}>수정</button>
        </div>
      ) : (
        <div>
          <input type="text" />
          <button onClick={onClickEdit}>수정끝</button>
        </div>
      )}
    </>
  );
}
