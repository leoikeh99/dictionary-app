import React, { useState } from "react";
import { VisuallyHidden } from "@ariakit/react";
import { styled } from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 20px;
  min-width: 40px;
  border-radius: 10px;
  background-color: var(--clr-neutral-400);
  transition: background-color 100ms ease-in;

  &::before {
    content: "";
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position: relative;
    left: 3px;
    background-color: var(--clr-neutral-100);
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    background-color: var(--clr-primary-400);
    cursor: pointer;
  }
`;

const MyCheckBox = styled.input`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + label {
    background-color: var(--clr-primary-400);
  }

  & + label::before {
  }

  &:checked + label::before {
    transform: translateX(20px);
  }

  &:focus + label {
    //add focus style
  }
`;

const ToggleSwitch = ({ defaultStatus, onToggle }) => {
  const [value, setValue] = useState(defaultStatus);

  const onChange = (e) => {
    setValue(e.target.checked);
    onToggle(e.target.checked);
  };

  return (
    <>
      <MyCheckBox
        id="toggleSwitch"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <Label htmlFor="toggleSwitch">
        <VisuallyHidden>Toggle dark theme</VisuallyHidden>
      </Label>
    </>
  );
};

export default ToggleSwitch;
