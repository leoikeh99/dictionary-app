import React from "react";
import { styled } from "styled-components";
import { LoaderAnimation } from "../../styles/Keyframes";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 10%;
`;

const Loader = styled.span`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  color: inherit;
  vertical-align: middle;
  pointer-events: none;
  border: 1em solid transparent;
  border-top-color: var(--clr-primary-400);
  border-radius: 50%;
  animation: 0.7s ${LoaderAnimation} linear infinite;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    position: absolute;
    top: -1em;
    left: -1em;
    border: 1em solid var(--bg-loader);
    border-radius: 50%;
    opacity: 0.5;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
