import { Form, FormLabel, VisuallyHidden, useFormStore } from "@ariakit/react";
import React from "react";
import SearchInput from "../forms/SearchInput";
import { ErrorLabel } from "../../styles/FormStyles";

const DictionaryForm = () => {
  const form = useFormStore({ defaultValues: { search: "" } });
  return (
    <Form store={form}>
      <VisuallyHidden>
        <FormLabel name={form.names.search}>Search for any word</FormLabel>
      </VisuallyHidden>
      <SearchInput
        store={form}
        search={form.names.search}
        type="text"
        placeholder="Search for any word..."
        required
      />
      <ErrorLabel name={form.names.search} />
    </Form>
  );
};

export default DictionaryForm;
