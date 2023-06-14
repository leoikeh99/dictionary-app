import { Form, FormLabel, VisuallyHidden, useFormStore } from "@ariakit/react";
import React, { useContext } from "react";
import SearchInput from "../forms/SearchInput";
import { ErrorLabel } from "../../styles/FormStyles";
import { DictionaryContext } from "../../context/DictionaryContext";

const DictionaryForm = () => {
  const { getWord } = useContext(DictionaryContext);
  const form = useFormStore({ defaultValues: { search: "" } });

  form.useSubmit((state) => {
    getWord(state.values.search);
  });
  return (
    <Form store={form} resetOnSubmit={false}>
      <VisuallyHidden>
        <FormLabel name={form.names.search}>Search for any word</FormLabel>
      </VisuallyHidden>
      <SearchInput
        store={form}
        search={form.names.search}
        type="text"
        placeholder="Search for any word..."
      />
      <ErrorLabel name={form.names.search} />
    </Form>
  );
};

export default DictionaryForm;
