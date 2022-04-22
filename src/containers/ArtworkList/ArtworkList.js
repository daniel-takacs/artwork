import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItems } from "../../redux/actions/itemActions";
import ArtworkComponent from "../ArtworkComponent/ArtworkComponent";
import ReactPaginate from "react-paginate";
import "./ArtworkList.css";
import { Grid } from "@mui/material";
import ReactLoading from "react-loading";

function ArtworkList({ favourites, setFavourites, input, balls }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(25);
  const [pageCount, setPageCount] = useState(0);

  const fetchItems = async () => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks?page=1&limit=${limit}`)
      .catch((err) => {
        setError(err);
      });
    const total = response.data.pagination.total;
    setPageCount(Math.ceil(total / limit));
    setIsLoaded(true);
    dispatch(setItems(response.data.data));
  };
  useEffect(() => {
    fetchItems();
  }, [limit]);

  const getItems = async (currentPage) => {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json().catch((err) => console.error(err));
    return data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const artworksFormServer = await getItems(currentPage);
    dispatch(setItems(artworksFormServer));
    window.scrollTo(0, 0);
  };

  const sortingChange = (e) => {
    setLimit(e.target.value);
  };

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <div className="react-loading">
        <ReactLoading type={balls} color="#808080" delay="55" />
      </div>
    );
  } else {
    return (
      <div className="artwork_list">
        <Grid container spacing={5} justifyContent="center">
          <ArtworkComponent
            favourites={favourites}
            setFavourites={setFavourites}
            input={input}
          />
        </Grid>
        <div className="paginate-container">
          <div className="page-item-selector page-link">
            <label for="item-select">Items per page: </label>
            <select
              id="sort"
              defaultValue="25"
              onChange={(e) => sortingChange(e)}
            >
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
            </select>
          </div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousPageClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextPageClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
          />
        </div>
      </div>
    );
  }
}

export default ArtworkList;
