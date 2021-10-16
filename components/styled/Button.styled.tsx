import styled from "styled-components";

export const Button = styled.button`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: black;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  display: block;
  margin: 20px auto;
  cursor: pointer;
`;

export const MapButton = styled.button``;
