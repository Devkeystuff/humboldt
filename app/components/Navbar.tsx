import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface StyledLinkProps {
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
    font-family: 'Source Code Pro', sans-serif;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #aad725;
      transition: width 0.3s;
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
      font-family: 'Source Code Pro', sans-serif;

      li {
        text-align: center;
        width: 100%;
        height: 2rem;

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #aad725;
          transition: width 0.3s;
        }

        &:hover::after {
          width: 100%;
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

const StyledLink = styled.a``;

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return <nav></nav>;
};
