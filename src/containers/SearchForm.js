import React from 'react'

function SearchForm({ query, setQuery, input, setInput }) {

  const submitHandler = (e) => {
    e.preventDefault()
    setQuery(input)
    setInput("")
  }
  console.log(query)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <form class="d-flex" onSubmit={submitHandler}>
        <input
          value={input}
          class="form-control me-2"
          type="text"
          name="searchText"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm