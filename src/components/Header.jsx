import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { styled } from "styled-components";
import { Container } from "../styles/LayoutStyles";
import DropDown from "./forms/DropDown";

const fontTypes = ["San Serif", "Serif", "Mono"];

const Wrapper = styled.header``;

export default function Header() {
  const [font, setFont] = useState("San Serif");

  const updateFont = (newFont) => setFont(newFont);
  return (
    <Wrapper>
      <Container>
        <Logo />
        <DropDown
          values={fontTypes}
          defaultValue={font}
          setValue={updateFont}
          label="Select font"
        />
      </Container>
    </Wrapper>
  );
}
