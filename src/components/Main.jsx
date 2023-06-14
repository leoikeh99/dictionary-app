import React, { useContext } from "react";
import DictionaryForm from "./dictionary/DictionaryForm";
import Result from "./dictionary/Result";
import NotFound from "./dictionary/NotFound";
import Loading from "./dictionary/Loading";
import { styled } from "styled-components";
import { Container } from "../styles/LayoutStyles";
import { DictionaryContext } from "../context/DictionaryContext";

const Wrapper = styled.main`
  padding-bottom: 2.5rem;
`;

export default function Main() {
  const { loading, error, result } = useContext(DictionaryContext);
  return (
    <Wrapper>
      <Container>
        <DictionaryForm />
        {!loading && result && <Result />}
        {!loading && error && <NotFound />}
        {loading && <Loading />}
      </Container>
    </Wrapper>
  );
}
