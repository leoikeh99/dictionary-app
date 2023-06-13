import React, { useContext, useEffect } from "react";
import * as Ariakit from "@ariakit/react";
import { styled } from "styled-components";
import { SettingsContext } from "../../context/SettingsContext";

const Wrapper = styled.div``;

const Label = styled(Ariakit.SelectLabel)``;

const Select = styled(Ariakit.Select)`
  min-width: 8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  color: var(--clr-main-text);
  font-weight: var(--fw-bold);
  font-size: var(--fs-main-text);
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    stroke: var(--clr-primary-400);
  }

  &:focus {
    outline: 2px solid var(--clr-primary-400);
  }

  @media (min-width: 34.375em) {
    min-width: 11.438rem;
  }
`;

const SelectPopover = styled(Ariakit.SelectPopover)`
  display: grid;
  gap: 1rem;
  background-color: var(--bg-main);
  box-shadow: var(--dropdown-shadow);
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 1rem;

  // &:focus {
  //   outline: 2px solid var(--clr-primary-400);
  // }
`;

const SelectItem = styled(Ariakit.SelectItem)`
  color: var(--clr-main-text);
  font-weight: var(--fw-bold);
  font-size: var(--fs-main-text);
  font-family: ${({ ff }) => (ff ? ff : "var(--ff-sans-serif)")};
  cursor: pointer;

  &:hover,
  &:focus-visible,
  &[data-focus-visible],
  &[data-active-item] {
    color: var(--clr-primary-text);
  }
`;

const DropDown = ({ values, defaultValue, setValue, label }) => {
  const { getFontVariable } = useContext(SettingsContext);
  const select = Ariakit.useSelectStore({ defaultValue });
  const value = select.useState().value;

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <Wrapper>
      <Ariakit.VisuallyHidden>
        <Label store={select}>{label}</Label>
      </Ariakit.VisuallyHidden>
      <Select store={select} />
      <SelectPopover store={select} gutter={3} sameWidth>
        {values.map((value, index) => (
          <SelectItem value={value} key={index} ff={getFontVariable(value)} />
        ))}
      </SelectPopover>
    </Wrapper>
  );
};

export default DropDown;
