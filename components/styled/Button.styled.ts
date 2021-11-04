import styled from "styled-components";

interface IButtonProps {
  isMapButton?: boolean;
  centered?: boolean;
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
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
  display: block;
  margin: ${({ centered }) => !centered ? '0 0' : '0 auto'};
  margin: ${({ isMapButton }) => !isMapButton ? 'inherit inherit' : '20px auto'};
  cursor: pointer;
  transform: translate(0, -${({ isMapButton }) => isMapButton ? 50 : 0}%);
  box-shadow: 0 8px 20px 0 ${({ theme }) => theme.colors.accentShadow};
  z-index: 5;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
    box-shadow: 0 8px 50px 2px ${({ theme }) => theme.colors.accentShadow};
  }
  &:disabled {
    background-color: rgba(255, 255, 255, 0.2);
    color: #A5A5A5;
    box-shadow: none;
    cursor: default;
  }
`;
