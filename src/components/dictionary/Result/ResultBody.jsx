import React from "react";
import { styled } from "styled-components";
import { Link, SubHeading, Text } from "../../../styles/TypographyStyles";
import { Divider, FlexGroup } from "../../../styles/LayoutStyles";
import { ReactComponent as NewPageIcon } from "../../../assets/images/icon-new-window.svg";

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
  return (
    <div>
      <LineHeading>
        <SubHeading>noun</SubHeading>
        <Divider type="horizontal" />
      </LineHeading>
      <Text colortype="sub" fs="sub">
        Meaning
      </Text>
      <MeaningList>
        <MeaningItem>
          <Text colortype="main" fs="main">
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </Text>
          <Example colortype="sub" fs="sub"></Example>
        </MeaningItem>
        <MeaningItem>
          <Text colortype="main" fs="main">
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </Text>
        </MeaningItem>
        <MeaningItem>
          <Text colortype="main" fs="main">
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </Text>
        </MeaningItem>
      </MeaningList>
      <FlexGroup gap={1}>
        <Text colortype="sub" fs="sub">
          Synonyms
        </Text>
        <Text colortype="primary" fs="sub" fw="bold">
          electronic keyboard
        </Text>
      </FlexGroup>
      <LineHeading>
        <SubHeading>verb</SubHeading>
        <Divider type="horizontal" />
      </LineHeading>
      <Text colortype="sub" fs="sub">
        Meaning
      </Text>
      <MeaningList>
        <MeaningItem>
          <Text colortype="main" fs="main">
            To type on a computer keyboard.
          </Text>
          <Example colortype="sub" fs="sub">
            “Keyboarding is the part of this job I hate the most.”
          </Example>
        </MeaningItem>
      </MeaningList>
      <Source>
        <SourceText>Source</SourceText>
        <Link href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
          <span>https://en.wiktionary.org/wiki/keyboard</span> <NewPageIcon />
        </Link>
      </Source>
    </div>
  );
};

export default ResultBody;
