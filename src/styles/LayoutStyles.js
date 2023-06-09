import { styled } from "styled-components";

export const Container = styled.div`
  max-width: min(46rem, 92%);
  margin-inline: auto;
`;

export const SpaceOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "0.5rem")};
`;

export const Divider = styled.span`
  display: block;
  height: ${({ type, height }) =>
    type === "vertical" ? `${height}rem` : "1px"};
  width: ${({ type }) => (type === "horizontal" ? "100%" : "1px")};
  background: ${({ type }) =>
    type === "vertical" ? "var(--clr-neutral-300)" : "var(--clr-divider)"};
`;
