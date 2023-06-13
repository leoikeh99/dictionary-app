import React from "react";
import { MainHeading, Text } from "../../../styles/TypographyStyles";
import { styled } from "styled-components";
import { PlayButton } from "../../../styles/FormStyles";
import { ReactComponent as PlayIcon } from "../../../assets/images/icon-play.svg";
import { VisuallyHidden } from "@ariakit/react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;

  @media (min-width: 34.375em) {
    margin-top: 3.25rem;
  }
`;

const Word = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const ResultHead = () => {
  return (
    <Wrapper>
      <Word>
        <MainHeading>Keyboard</MainHeading>
        <Text colortype="primary" fs="sub-heading">
          /ˈkiːbɔːd/
        </Text>
      </Word>
      <PlayButton>
        <VisuallyHidden>Play word pronunciation</VisuallyHidden>
        <PlayIcon />
      </PlayButton>
    </Wrapper>
  );
};

export default ResultHead;
