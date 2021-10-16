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
      font-family: "Source Code Pro", sans-serif;
    }
  }
`;

const StyledLink = styled.a<IStyledLinkProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : "#000")};
`;

interface INavbarProps {}

export const Navbar: React.FC = (props: INavbarProps) => {
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
