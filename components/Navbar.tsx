import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

interface IStyledLinkProps {
  isActive: boolean;
}

const StyledNav = styled.nav`
  display: grid;
  height: 80px;

  ul {
    display: flex;
    list-style: none;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    li {
      text-transform: uppercase;
      font-family: "Source Code Pro", sans-serif;

      &::after{
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #AAD725;
        transition: width .3s;
      }

      &:hover::after{
        width:100%;
      }
    }
  }
`;

const StyledLink = styled.a<IStyledLinkProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : "#fff")};
`;

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const router = useRouter();
  return (
    <StyledNav>
      {/* TODO: Logo */}
      <ul>
        <li>
          <Link href="/" passHref>
            <StyledLink isActive={router.pathname == "/"}>Home</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/create" passHref>
            <StyledLink isActive={router.pathname == "/create"}>
              Create
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/places" passHref>
            <StyledLink isActive={router.pathname == "/places"}>
              Places
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <StyledLink isActive={router.pathname == "/about"}>
              About
            </StyledLink>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
