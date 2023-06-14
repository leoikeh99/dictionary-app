import React, { useContext } from "react";
import { MainHeading, Text } from "../../../styles/TypographyStyles";
import { styled } from "styled-components";
import { PlayButton } from "../../../styles/FormStyles";
import { ReactComponent as PlayIcon } from "../../../assets/images/icon-play.svg";
import { VisuallyHidden } from "@ariakit/react";
import { DictionaryContext } from "../../../context/DictionaryContext";

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
  const { result } = useContext(DictionaryContext);

  function playPronunciation() {
    if (result.phonetics.length < 1) return;

    const audioUrl = result.phonetics.find(
      (phonetic) => phonetic.audio !== ""
    ).audio;
    if (!audioUrl) return;

    let pronunciation = new Audio(audioUrl);
    pronunciation.play();
  }
  return (
    <Wrapper>
      <Word>
        <MainHeading>{result.word}</MainHeading>
        <Text colortype="primary" fs="sub-heading">
          {result.phonetic}
        </Text>
      </Word>
      {result.phonetics.length > 0 && (
        <PlayButton onClick={playPronunciation}>
          <VisuallyHidden>Play word pronunciation</VisuallyHidden>
          <PlayIcon />
        </PlayButton>
      )}
    </Wrapper>
  );
};

export default ResultHead;
