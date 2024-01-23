import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

type TIsActive = {
  isActive: boolean
}

export const BlueButton = styled.button<TIsActive>`
  background-color: ${(props) => (props.isActive === true ? "green" : "red")};
`;
