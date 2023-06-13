import React from "react";
import { ReactComponent as SearcIcon } from "../../assets/images/icon-search.svg";
import { FormInput } from "@ariakit/react";
import { styled } from "styled-components";
import { SpaceOut } from "../../styles/LayoutStyles";

const Wrapper = styled.div`
  background-color: var(--bg-input);
  padding-right: var(--spacing-xl);
  border-radius: 1rem;
  overflow: hidden;

  &:has(input[data-focus-visible]),
  &:hover {
    outline: 1px solid var(--clr-primary-400);
  }

  &:has(input[aria-invalid="true"]) {
    outline: 1px solid var(--clr-accent-400);
  }
`;

const Input = styled(FormInput)`
  width: 100%;
  padding-block: var(--spacing-sm);
  padding-left: var(--spacing-xl);
  font-weight: var(--fw-bold);
  font-size: var(--fs-main-text);
  color: var(--clr-main-text);
  background-color: transparent;
  border: 0;

  &::placeholder {
    font-weight: var(--fw-bold);
    color: var(--clr-placeholder-text);
  }

  &[data-focus-visible] {
    outline: 0;
  }
`;

const SearchInput = ({ store, search, ...props }) => {
  store.useValidate(() => {
    const value = store.getValue(search);
    if (value.trim() === "") {
      store.setError(search, "Whoops, can’t be empty…");
    }
  });
  return (
    <Wrapper>
      <SpaceOut>
        <Input name={search} {...props} />
        <SearcIcon />
      </SpaceOut>
    </Wrapper>
  );
};

export default SearchInput;
