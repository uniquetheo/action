/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import {
  StyledForm,
  StyledFormWrapper,
  SharedStyles,
} from "./Form/Form.styles";
import { StyledButton } from "./Button/Button.styles";

export const Login = () => {
  return (
    <Container>
      <StyledFormWrapper>
        <StyledForm1>
          <h2>Sign in</h2>
          <span>Fill the below form with guardian's information</span>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <Remember>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </Remember>
          <StyledButton>Sign in</StyledButton>
          <ForgotPass>
            <a href="/signup">Don't have an account?</a>
            <a href="/">Forgot password?</a>
          </ForgotPass>
        </StyledForm1>
      </StyledFormWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const StyledForm1 = styled(StyledForm)``;

const Remember = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 15px;
    background-color: #009379;
  }
`;

const ForgotPass = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
