import React from "react";
import "./SearchForm.css";

function SearchForm({ query, setQuery, input, setInput }) {
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(input);
  };
  console.log(query);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form class="d-flex" onSubmit={submitHandler} id="navBarSearchForm">
        <input
          value={input}
          class="form-control me-2"
          type="text"
          name="searchText"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchForm;
