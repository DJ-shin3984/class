import { UpCircleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleFilled)`
  color: red;
  font-size: 100px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDeleteId = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
  };
  // return <UpCircleFilled />;
  return (
    <div id="deleteId" onClick={onClickDeleteId}>
      <MyIcon />
    </div>
  );
}
