import { FormError } from "@ariakit/react";
import { styled } from "styled-components";

export const ErrorLabel = styled(FormError)`
  color: var(--clr-accent-400);
  font-size: var(--fs-main-text);
  margin-top: 0.5rem;
`;

export const PlayButton = styled.button`
  border: 0;
  background: transparent;
  max-width: 3rem;
  cursor: pointer;

  &:hover {
    svg circle {
      transition: 200ms ease-in opacity;
      opacity: 1;
    }

    svg path {
      fill: var(--clr-neutral-100);
      transition: 200ms ease-in fill;
    }
  }

  @media (min-width: 34.375em) {
    max-width: 4.688rem;
  }
`;
