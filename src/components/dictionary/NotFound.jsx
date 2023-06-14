import React, { useContext } from "react";
import { styled } from "styled-components";
import { Text } from "../../styles/TypographyStyles";
import { DictionaryContext } from "../../context/DictionaryContext";

const Wrapper = styled.div`
  padding-top: 10%;
`;

const Emoji = styled.p`
  font-size: var(--fs-heading);
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 34.375em) {
    margin-bottom: 2.75rem;
  }
`;
const Title = styled(Text)`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: var(--spacing-md);

  @media (min-width: 34.375em) {
    font-size: var(--spacing-lg);
  }
`;

const Description = styled(Text)`
  font-size: var(--spacing-md);
  text-align: center;

  @media (min-width: 34.375em) {
    font-size: calc(var(--spacing-md) + 0.125rem);
  }
`;

const NotFound = () => {
  const { error } = useContext(DictionaryContext);
  return (
    <Wrapper>
      <Emoji>😕</Emoji>
      <Title colortype="main">{error.title}</Title>
      <Description colortype="sub">
        {error.message}
        {error.resolution}
      </Description>
    </Wrapper>
  );
};

export default NotFound;
