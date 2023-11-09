import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.variant === "outline" ? "#E5F4F2" : "#009379"};
  color: ${(props) => (props.variant === "outline" ? "#009379" : "#fff")};
  padding: 10px 32px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#E5F4F2" : "#009379"};
    color: ${(props) => (props.variant !== "outline" ? "#009379" : "#fff")};
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
