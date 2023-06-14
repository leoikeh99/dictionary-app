import React, { useContext } from "react";
import { styled } from "styled-components";
import { Link, SubHeading, Text } from "../../../styles/TypographyStyles";
import { Divider, FlexGroup } from "../../../styles/LayoutStyles";
import { ReactComponent as NewPageIcon } from "../../../assets/images/icon-new-window.svg";
import { DictionaryContext } from "../../../context/DictionaryContext";
import { v4 as uuidv4 } from "uuid";

const LineHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: var(--spacing-2xl);

  @media (min-width: 34.375em) {
    margin-block: 2.5rem;
  }
`;

const MeaningList = styled.ul`
  margin-left: 1em;
  margin-top: 1.063rem;
  margin-bottom: 1.5rem;

  @media (min-width: 34.375em) {
    margin-top: 1.563rem;
    margin-bottom: 2.5rem;
  }
`;

const MeaningItem = styled.li`
  margin-bottom: 0.813rem;
  &::marker {
    color: var(--clr-primary-400);
  }
`;

const Example = styled(Text)`
  margin-top: 0.813rem;
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--bg-horizontal-divider);

  @media (min-width: 34.375em) {
    gap: 1.5rem;
  }
`;

const SourceText = styled.p`
  text-decoration: underline;
  color: var(--clr-neutral-400);
  text-decoration-color: var(--clr-neutral-400);
`;

const ResultBody = () => {
  const { result } = useContext(DictionaryContext);

  return (
    <div>
      {result.meanings.map((meaning) => (
        <div key={uuidv4()}>
          <LineHeading>
            <SubHeading>{meaning.partOfSpeech}</SubHeading>
            <Divider type="horizontal" />
          </LineHeading>
          <Text colortype="sub" fs="sub">
            Meaning
          </Text>
          <MeaningList>
            {meaning.definitions.map((definition) => (
              <MeaningItem key={uuidv4()}>
                <Text colortype="main" fs="main">
                  {definition.definition}
                </Text>
                {definition.example && (
                  <Example colortype="sub" fs="sub">
                    {definition.example}
                  </Example>
                )}
              </MeaningItem>
            ))}
          </MeaningList>
          {meaning.synonyms.length > 0 && (
            <FlexGroup gap={1}>
              <Text colortype="sub" fs="sub">
                Synonyms
              </Text>
              <Text colortype="primary" fs="sub" fw="bold">
                {meaning.synonyms.map((synonym, index) => (
                  <span key={uuidv4()}>
                    {synonym}
                    {index !== meaning.synonyms.length - 1 && ", "}
                  </span>
                ))}
              </Text>
            </FlexGroup>
          )}
          {meaning.antonyms.length > 0 && (
            <FlexGroup gap={1}>
              <Text colortype="sub" fs="sub">
                Antonyms
              </Text>
              <Text colortype="primary" fs="sub" fw="bold">
                {meaning.antonyms.map((antonyms, index) => (
                  <span key={uuidv4()}>
                    {antonyms}
                    {index !== meaning.antonyms.length - 1 && ", "}
                  </span>
                ))}
              </Text>
            </FlexGroup>
          )}
        </div>
      ))}

      <Source>
        <SourceText>Source</SourceText>
        <Link href={result.sourceUrls[0]} target="_blank">
          <span>{result.sourceUrls[0]}</span> <NewPageIcon />
        </Link>
      </Source>
    </div>
  );
};

export default ResultBody;
