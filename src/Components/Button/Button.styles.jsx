import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.variant === "outline" ? "#E5F4F2" : "#3285EF"};
  color: ${(props) => (props.variant === "outline" ? "#3285EF" : "#fff")};
  padding: 10px 32px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#E5F4F2" : "#3285EF"};
    color: ${(props) => (props.variant !== "outline" ? "#3285EF" : "#fff")};
  }
`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    &:hover {
        background-image: linear-gradient(to right, #fda085 100%, #f6d365 100%);
    }
`

export const SecondaryButton = styled(StyledButton)`
    background-color: #e75252;
    &:hover {
        background-color: #862c2c;
        color: #fff;
    }
`
