import React from "react";
import { Form, useNavigation } from "react-router-dom";
type SearchFormProps = {
  searchTerm: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <Form
        method="GET"
        className="max-w-md mx-auto mt-10 mb-10 p-6 bg-white shadow-lg rounded-xl border-2 border-myteal"
      >
        <div className="mb-4 flex gap-1.5">
          <input
            type="search"
            name="search"
            defaultValue={searchTerm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button type="submit" className="bg-myteal " disabled={isSubmitting}>
            {isSubmitting ? "Searching..." : "Search"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
