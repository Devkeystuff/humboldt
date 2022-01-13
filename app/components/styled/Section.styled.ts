import styled from 'styled-components';

interface ISectionProps {
  bg: string;
}

export const Section = styled.section<ISectionProps>`
  padding: 10em;
  background-color: ${({ bg }) => bg};
`;
