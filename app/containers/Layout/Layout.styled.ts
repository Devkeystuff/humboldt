import styled from 'styled-components';

export const StyledLayout = styled.div`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  main {
    overflow-y: scroll;
    padding: 0 10vw;
  }
  &::before {
    content: '';
    position: absolute;
    background: url('/images/ellipse2.png');
    background-repeat: no-repeat;
    background-position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 100vw;
    pointer-events: none;
    z-index: -1;
  }
`;
