import React, { useState } from "react";
import { styled } from "styled-components";
import {
  Container,
  Divider,
  FlexGroup,
  SpaceOut,
} from "../styles/LayoutStyles";
import DropDown from "./forms/DropDown";
import ToggleSwitch from "./forms/ToggleSwitch";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";

const fontTypes = ["San Serif", "Serif", "Mono"];

const Wrapper = styled.header`
  padding-block: 1.5rem;
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    transition: stroke 200ms ease-in-out;
    path {
      stroke: ${({ darkMode }) => darkMode && "var(--clr-primary-400)"};
    }
  }
`;

export default function Header() {
  const [font, setFont] = useState("San Serif");
  const [darkMode, setDarkMode] = useState(false);

  const updateFont = (newFont) => setFont(newFont);
  const toggleTheme = (status) => setDarkMode(status);

  return (
    <Wrapper>
      <Container>
        <SpaceOut>
          <Logo />
          <Tools>
            <DropDown
              values={fontTypes}
              defaultValue={font}
              setValue={updateFont}
              label="Select font"
            />
            <Divider type="vertical" height={2} />
            <ThemeSwitcher darkMode={darkMode}>
              <ToggleSwitch defaultStatus={darkMode} onToggle={toggleTheme} />
              <MoonIcon />
            </ThemeSwitcher>
          </Tools>
        </SpaceOut>
      </Container>
    </Wrapper>
  );
}
