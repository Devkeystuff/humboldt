import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

interface IStyledLinkProps {
  isActive: boolean;
}

const StyledNav = styled.nav`
  display: grid;

  #desktop-buttons {
    display: flex;
    height: 80px;
    list-style: none;
    width: 50%;
    justify-content: space-around;
    padding: 0;
    align-items: center;
    margin: auto;
  }

  #desktop-buttons li {
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

    &:hover::after {
      width: 100%;
    }
  }

  .grid-el {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 5%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: space-between;

    #desktop-buttons {
      display: none;
    }

    #mobile-buttons {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: auto;
      grid-column: 1/3;
      grid-row: 2;
      width: 100%;
      overflow: hidden;
      text-transform: uppercase;
      font-family: "Source Code Pro", sans-serif;

      li {
        text-align: center;
        width: 100%;
        height: 2rem;

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

    #logo-container {
      height: 80px;

      #logo {
        font-size: 35px;
        font-family: Raleway;
        font-style: italic;
        font-weight: 900;
        color: #aad725;
        margin: auto 0;
        height: 50%;
        cursor: pointer;
      }
    }

    .grid-el {
      display: flex;
      height: 80px;
      align-items: center;
    }

    #hamburger-container {
      flex-direction: row-reverse;

      .hamburger {
        display: block;
        cursor: pointer;

        .bar {
          display: block;
          width: 34px;
          height: 4px;
          margin: 6px auto;
          background-color: #aad725;
        }
      }
    }
  }
`;

const StyledLink = styled.a<IStyledLinkProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : "#fff")};
`;

interface INavbarProps {}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(undefined)
  const router = useRouter();

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth <= 768 ? true : false)
      setOpen(false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])


  let respUl =
    <ul style={{ display: !mobile ? "flex" : open ? "flex" : "none" }} id={mobile ? "mobile-buttons" : "desktop-buttons"}>
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

  return (
    <StyledNav>
      <div className="grid-el" id="logo-container">
        <Link href="/" passHref>
          <h1 id="logo">humboldt.</h1>
        </Link>
      </div>
      <div className="grid-el" id="hamburger-container" >
        <div onClick={() => setOpen(!open)} className="hamburger">
          <div className="bar 1"></div>
          <div className="bar 2"></div>
          <div className="bar 3"></div>
        </div>
      </div>
      {respUl}
    </StyledNav>
  );
};
