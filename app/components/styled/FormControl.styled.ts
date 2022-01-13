import styled from 'styled-components';

export const FormControl = styled.input`
  width: 100%;
  height: 70px;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  padding: 20px;
  border: 1px solid rgba(51, 51, 51);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  transition: 0.3s;

  ::placeholder {
    font-family: 'Source Code Pro', sans-serif;
    font-size: 16px;
    color: #a5a5a5;
  }

  &:focus {
    outline: none;
    border: 1px solid #aad725;
    box-shadow: 0px 8px 92px rgba(170, 215, 37, 0.32);
  }
`;
