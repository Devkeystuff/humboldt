import styled from "styled-components";

interface IButtonProps {
  isMapButton?: boolean;
}

export const Button = styled.button<IButtonProps>`
  font-family: "Raleway", sans-serif;
  position: relative;
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
  margin: ${({ isMapButton }) => isMapButton ? 0 : 20}px auto;
  cursor: pointer;
  transform: translate(0, -${({ isMapButton }) => isMapButton ? 200 : 0}%);
  box-shadow: 0 8px 20px 0 ${({ theme }) => theme.colors.accentShadow};
  z-index: 5;
`;