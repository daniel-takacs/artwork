import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../redux/actions/itemActions";
import ArtworkComponent from "./ArtworkComponent";
import ReactPaginate from "react-paginate";

function ArtworkList() {
  const items = useSelector((state) => state.allItems.items);
  const { total_pages } = items;
  const dispatch = useDispatch();
  const limit = 12;

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

  console.log("product", items);

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

  return (
    <div className="container">
      <div className="row m-2">
        <ArtworkComponent />
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
  );
}

export default ArtworkList;
