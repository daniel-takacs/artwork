import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedItem, removeSelectedItem } from "../redux/actions/itemActions";

function ArtworkDetails() {
  const item = useSelector((state) => state.item);
  const { artist_title, publication_history, id } = item;
  const { itemId } = useParams();
  const dispatch = useDispatch();
  console.log(itemId);

  const fetchItemDetail = async (id) => {
    const response = await axios
      .get(`https://api.artic.edu/api/v1/artworks/${id}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedItem(response.data.data));
  };
  useEffect(() => {
    if (itemId && itemId !== "") fetchItemDetail(itemId);
    return () => {
      dispatch(removeSelectedItem());
    };
  }, [itemId]);
  return (
    <div>
      {Object.keys(item).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
        <div>{id}</div>
        <div>{publication_history}</div>
        </>
      )}
    </div>
  );
}

export default ArtworkDetails;
