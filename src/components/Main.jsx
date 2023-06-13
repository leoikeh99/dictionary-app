import React from "react";
import DictionaryForm from "./dictionary/DictionaryForm";
import { Container } from "../styles/LayoutStyles";
import Result from "./dictionary/Result";
import { styled } from "styled-components";

const Wrapper = styled.main`
  padding-bottom: 2.5rem;
`;

export default function Main() {
  return (
    <Wrapper>
      <Container>
        <DictionaryForm />
        <Result />
      </Container>
    </Wrapper>
  );
}
