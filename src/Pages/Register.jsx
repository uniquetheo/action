/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import {
  StyledForm,
  StyledFormWrapper,
} from "../Components/Form/Form.styles.jsx";
import { StyledButton } from "../Components/Button/Button.styles.jsx";
import logo from "../assets/nic_logo_transparent.png";
import Input from "../Components/commons/Input.jsx";
// import { validateFields } from "../utils/helpers.js";

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const labels = ["Full Name", "Age"];

  const levels = ["Select Class","Primary4", "Primary5", "Primary6", "JHS1", "JHS2", "JHS3"];

  const optionNumbers = ["Select Option","Number1", "Number2", "Number3"];

  return (
    <Main>
      <StyledFormWrapper>
        <StyledForm1 onSubmit={handleSubmit}>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <h2>Register a student for the Quiz</h2>
          <span>Add student's details below</span>

          {/* {
            labels.map((label) => {
              return (
                <input key={label}
                name={label.toLowerCase()}
                label={label}
                // data={data}
                // setData={setData}
                // isError={isError}
                // setIsError={setIsError}
                type={label.toLowerCase().includes('number') ? 'number' : 'text'} />
              )
            })} */}

          {labels.map((label) => {
            return (
              <>
                <label htmlFor={label.toLowerCase()}>{label}</label>
                <input
                  name={label.toLowerCase()}
                  type={label.toLowerCase().includes("age") ? "number" : "text"}
                />
              </>
            );
          })}
          <label htmlFor="Class">Class</label>
          <select name="Class" id="Class">
            {levels.map((level) => {
              return (
                <>
                  {/* <label htmlFor="level">Class</label> */}
                  <option value={level.toLowerCase()}>{level}</option>
                </>
              );
            })}
          </select>

          <label htmlFor="Option">Option</label>
          <select name="option" id="option">
            {
              optionNumbers.map((optionNumber)=>{
                return (
                <option value={optionNumber.toLowerCase()}>{optionNumber}</option>
                )
              })
            }
          </select>

          {/* <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
          <label htmlFor="Class">Class</label> */}
          {/* <select name="Class" id="Class">
            <option value="">Select Class</option>
            <option value="Primary4">Primary4</option>
            <option value="Primary5">Primary5</option>
            <option value="Primary6">Primary6</option>
            <option value="JHS1">JHS1</option>
            <option value="JHS2">JHS2</option>
            <option value="JHS3">JHS3</option>
          </select>
          {/* <label htmlFor="Number">Number</label> 
          <select name="number" id="number">
            <option value="">Select Number</option>
            <option value="1">Number 1</option>
            <option value="2">Number 2</option>
            <option value="3">Number 3</option>
          </select> */}
          <StyledButton type="submit">Register</StyledButton>
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
  align-items: center;
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
