import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { StyledNav } from './Navbar.styled';

interface StyledLinkProps {
  isActive: boolean;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  return <nav></nav>;
};

export default Navbar;
