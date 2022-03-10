import styled from 'styled-components';

const CommonHeaderStyles = styled.h1`
  font-family: 'DM Serif Display';
  font-weight: 400;
`;

export const ExtraLargeHeading = styled(CommonHeaderStyles)`
  font-size: 4rem;
`;

export const LargeHeading = styled(CommonHeaderStyles)`
  font-size: 3rem;
`;

export const MediumHeading = styled(CommonHeaderStyles)`
  font-size: 2rem;
`;

export const SmallHeading = styled(CommonHeaderStyles)`
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  font-family: 'Source Code Pro';
  font-weight: 400;
  font-size: 1rem;
`;
