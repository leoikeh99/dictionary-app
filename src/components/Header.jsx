import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { Container, Divider, SpaceOut } from "../styles/LayoutStyles";
import DropDown from "./forms/DropDown";
import ToggleSwitch from "./forms/ToggleSwitch";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";
import { SettingsContext } from "../context/SettingsContext";

const Wrapper = styled.header`
  padding-block: 1.5rem;

  @media (min-width: 34.375em) {
    padding-top: 3.625rem;
    padding-bottom: 3.188rem;
  }
`;

const Settings = styled.div`
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
      stroke: ${({ darkmode }) =>
        darkmode === "true" ? "var(--clr-primary-400)" : ""};
    }
  }
`;

export default function Header() {
  const { darkMode, toggleDarkMode, font, fontTypes, changeFont } =
    useContext(SettingsContext);

  const updateFont = (newFont) => changeFont(newFont);

  return (
    <Wrapper>
      <Container>
        <SpaceOut>
          <Logo />
          <Settings>
            <DropDown
              values={fontTypes}
              defaultValue={font}
              setValue={updateFont}
              label="Select font"
            />
            <Divider type="vertical" height={2} />
            <ThemeSwitcher darkmode={darkMode.toString()}>
              <ToggleSwitch status={darkMode} onToggle={toggleDarkMode} />
              <MoonIcon />
            </ThemeSwitcher>
          </Settings>
        </SpaceOut>
      </Container>
    </Wrapper>
  );
}
