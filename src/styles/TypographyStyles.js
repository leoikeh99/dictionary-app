import { styled } from "styled-components";

export const MainHeading = styled.h1`
  color: var(--clr-heading);
  font-size: var(--fs-heading);
  font-weight: var(--fw-bold);
`;

export const SubHeading = styled.h2`
  color: var(--clr-heading);
  font-size: var(--fs-sub-heading-text);
  font-weight: var(--fw-bold);
  font-style: italic;
`;

export const Text = styled.p`
  font-size: ${({ fs }) => `var(--fs-${fs}-text)`};
  font-weight: ${({ fw }) => (fw ? `var(--fw-${fw})` : `var(--fw-regular)`)};
  color: ${({ colortype }) => `var(--clr-${colortype}-text)`};
`;

export const Link = styled.a`
  text-decoration-color: var(--clr-neutral-400);
  color: var(--clr-main-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
