import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItems } from "../../redux/actions/itemActions";

function SearchForm({ setIsLoaded }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
    
    const fetchQueryData = async () => {
      const response = await axios
        .get(`https://api.artic.edu/api/v1/artworks/search?q=${input}`)
        .catch((err) => {
          console.log(err);
        });
      const receivedData = response.data.data;
      const searchId = receivedData.map((item) => {
        return item.id;
      });

      const fetchData = async () => {
        setIsLoaded(false);
        const responses = await Promise.all(
          searchId.map((id) =>
            axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
          )
        );
        dispatch(setItems(responses.map((res) => res.data.data)));
        setIsLoaded(true);

      };
      fetchData();
    };
    fetchQueryData();
  };

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
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
