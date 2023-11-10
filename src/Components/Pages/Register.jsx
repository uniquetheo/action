/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { StyledForm, StyledFormWrapper } from "../Form/Form.styles";
import { StyledButton } from "../Button/Button.styles";

export const Register = () => {
  return (
    <Main>
      <StyledFormWrapper>
        <StyledForm1>
          <Logo>
            <img src="/assets/tp_nic_logo.png" alt="logo" />
          </Logo>
          <h2>Register a student for the Quiz</h2>
          <span>Add student's details below</span>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
          <label htmlFor="Class">Class</label>
          <select name="Class" id="Class">
            <option value="">Select Class</option>
            <option value="Basic4">Basic4</option>
            <option value="Basic5">Basic5</option>
            <option value="Basic6">Basic6</option>
            <option value="JHS1">JHS1</option>
            <option value="JHS2">JHS2</option>
            <option value="JHS3">JHS3</option>
          </select>
          <label htmlFor="Number">Number</label>
          <select name="number" id="number">
            <option value="">Select Number</option>
            <option value="1">Number 1</option>
            <option value="2">Number 2</option>
            <option value="3">Number 3</option>
          </select>
          <StyledButton>Register</StyledButton>
        </StyledForm1>
      </StyledFormWrapper>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const StyledForm1 = styled(StyledForm)`
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
  }

  select {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 20px;

    option {
      padding: 0 10px;

      &:first-child {
        color: #ccc;
      }
    }
  }
`;

const Logo = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: auto;
  }
`;