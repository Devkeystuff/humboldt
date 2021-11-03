import { PropsWithChildren, ReactChild, ReactNode } from "react";
import styled from "styled-components"

export const InlineGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props: PropsWithChildren<{ children: any[] }>) => props.children.map(() => '1fr ')};
  gap: 2rem;
  align-content: center;
  align-items: center;
`;