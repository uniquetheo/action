/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styles";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  photoUrl: ""
};

export const Form = () => {
  const [state, setState] = useState(initialState);

  return (
    <StyledFormWrapper>
      <StyledForm>
        <h2>Set up your account</h2>
        <span>Fill the below form with guardian's information</span>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <StyledButton type="submit">Submit</StyledButton>
        <Extra>
          <a href="/">Already have an account?</a>
        </Extra>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export const GlobalStyle = createGlobalStyle``;

export const SharedStyles = css`
  background-color: #fff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  background-color: #f5f5f5;
`;

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

    
    h2 {
        margin-bottom: 20px;
    }
    
    span {
        font-size: 14px;
        color: #666;
    }
    
    label {
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 5px;
        display: block;
    }
    
    input {
        display: block;
        width: 100%;
        ${SharedStyles}
    }
    
    button {
        width: 100%;
        cursor: pointer;
    }
`;

export const Extra = styled.div`
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
