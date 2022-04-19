import React from 'react'

function SearchForm() {

    const submitHandler = () => {

    }

    const handleChange = () => {
        
    }


  return (
    <div>
         <form class="d-flex" onSubmit={submitHandler}>
              <input
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