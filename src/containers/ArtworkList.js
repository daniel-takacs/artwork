import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../redux/actions/itemActions";
import ArtworkComponent from "./ArtworkComponent";
import ReactPaginate from "react-paginate";

function ArtworkList({ favourites, setFavourites, query, setQuery, input, setInput }) {
  const items = useSelector((state) => state.allItems.items);
  const { total_pages } = items;
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(25);

  const [pageCount, setPageCount] = useState(0);

  const fetchItems = async () => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks?page=1&limit=${limit}`)
      .catch((err) => {
        console.log(err);
      });
    const total = total_pages;
    setPageCount(1200 / limit);
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


  if (query.length > 0){

    const fetchItemsBySearch = async () => {
      const response = await axios
        .get(`https://api.artic.edu/api/v1/artworks/search?q=${query}`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(setItems(response.data.data));
    };
  }

    return (
      <>
      <main>
     <section className="cards">
          <ArtworkComponent favourites={favourites} setFavourites={setFavourites}
          query={query} setQuery={setQuery}/>
        </section>
        </main>
  
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
        </>
    );
}

export default ArtworkList;
